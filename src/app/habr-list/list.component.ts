import {
  Component,
  ContentChild,
  Input,
  Output,
  EventEmitter,
  OnInit,
  SimpleChanges
} from "@angular/core";
import { ListItemDirective } from "./list-item.directive";
import { ListItemContext } from "./list-item-context";
import { analyzeChanges } from "./analyzeChanges";

@Component({
  selector: "list",
  template: `
    <div *ngFor="let i of itemsToDisplay">
      <div>
        <input
          type="checkbox"
          [ngModel]="i.selected"
          (ngModelChange)="onSelectedChange(i, $event)"
        />
      </div>
      <div class="wrapper">
        <ng-container
          *ngTemplateOutlet="templateDir.templateRef; context: i"
        ></ng-container>
      </div>
    </div>
    <div>
      <button (click)="onPrev()">pre</button>
      <button (click)="onNext()">Next</button>
    </div>
  `
})
export class ListComponent implements OnInit {
  private _currentOffset = 0;
  protected itemsToDisplay: ListItemContext[] = [];

  @ContentChild(ListItemDirective) templateDir: ListItemDirective;
  @Input() source: (offset: number, pageSize: number) => any[];
  @Input() pageSize = 5;
  @Input() selectedItems: any[] = [];

  @Output() selectedItemsChange = new EventEmitter<any[]>();
  constructor() {}

  protected get prevEnabled(): boolean {
    return this._currentOffset - this.pageSize >= 0;
  }

  protected nextEnabled: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    const [dsChanged, dsValue] = analyzeChanges(changes, () => this.source);
    const [tplChanged, tplOutlet] = analyzeChanges(
      changes,
      () => this.templateDir
    );
    const [selectedItemsChanged, selectedItems] = analyzeChanges(
      changes,
      () => this.selectedItems
    );

    if (dsChanged || tplChanged) {
      this.itemsToDisplay = [];
      if (tplOutlet && tplOutlet.templateRef && dsValue) {
        this.onNext(0);
      }
    }

    if (
      selectedItemsChanged &&
      this.itemsToDisplay &&
      this.itemsToDisplay.length > 0
    ) {
      this.itemsToDisplay.forEach(i => {
        i.selected = selectedItems.indexOf(i.$implicit) >= 0;
      });
    }
  }

  protected onPrev() {
    this._currentOffset -= this.pageSize;
    this.itemsToDisplay = this.getItemContexts(
      this._currentOffset,
      this.pageSize
    );
    this.nextEnabled = true;
  }

  protected onSelectedChange(itemContext: ListItemContext, cbValue: boolean) {
    if (cbValue) {
      if (this.selectedItems.indexOf(itemContext.$implicit) < 0) {
        this.selectedItems = Object.assign([], this.selectedItems);
        this.selectedItems.push(itemContext.$implicit);
        this.selectedItemsChange.next(this.selectedItems);
      }
    } else {
      const idx = this.selectedItems.indexOf(itemContext.$implicit);

      if (idx >= 0) {
        this.selectedItems = Object.assign([], this.selectedItems);
        this.selectedItems.splice(idx, 1);
        this.selectedItemsChange.next(this.selectedItems);
      }
    }
    itemContext.selected = cbValue;
  }
  protected onNext(forcedOffset?: number) {
    const newOffset =
      forcedOffset === null || forcedOffset === undefined
        ? this._currentOffset + this.pageSize
        : forcedOffset;

    const next = this.getItemContexts(newOffset, this.pageSize + 1);

    this.nextEnabled = false;

    if (next && next.length > 0) {
      this.nextEnabled = next.length === this.pageSize + 1;
      this.itemsToDisplay = next.slice(0, this.pageSize);
      this._currentOffset = newOffset;
    }
  }
  private getItemContexts(offset: number, pageSize: number): ListItemContext[] {
    return this.source(offset, pageSize).map(
      i => new ListItemContext(i, this.selectedItems.indexOf(i) >= 0)
    );
  }

  ngOnInit() {
    console.log(this.source, this.selectedItems);
  }
}

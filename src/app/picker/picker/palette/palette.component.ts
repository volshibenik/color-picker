import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  HostListener,
  OnChanges
} from "@angular/core";

@Component({
  selector: "app-palette",
  templateUrl: "./palette.component.html",
  styleUrls: ["./palette.component.scss"]
})
export class PaletteComponent implements OnInit, OnChanges {
  @ViewChild("canvas") canvas: ElementRef<HTMLCanvasElement>;
  @Input() hue: string;
  @Output() color = new EventEmitter<string>();
  private ctx: CanvasRenderingContext2D;
  private mouseDown: boolean;
  private selectedPosition: { x: number; y: number };

  ngOnInit() {
    this.draw();
  }

  ngOnChanges() {
    this.draw();
  }

  getColorAt(x: number, y: number) {
    const imageData = this.ctx.getImageData(x, y, 1, 1).data;
    return `rgba(${imageData[0]}, ${imageData[1]}, ${imageData[2]}, 1)`;
  }

  emitColor(x: number, y: number) {
    const rgba = this.getColorAt(x, y);
    this.color.emit(rgba);
  }

  @HostListener("window: mouseup", ["$event"])
  onMiceUp() {
    this.mouseDown = false;
    this.selectedPosition = null;
  }

  onDown(evt: MouseEvent) {
    this.mouseDown = true;
    const x = evt.offsetX;
    const y = evt.offsetY;
    this.selectedPosition = { x, y };
    this.draw();
    this.emitColor(x, y);
  }

  onMove(evt: MouseEvent) {
    if (this.mouseDown) {
      const x = evt.offsetX;
      const y = evt.offsetY;
      this.selectedPosition = { x, y };
      this.draw();
      this.emitColor(x, y);
    }
  }

  draw() {
    const can = this.canvas.nativeElement;
    if (!this.ctx) {
      this.ctx = can.getContext("2d");
    }
    const w = can.width;
    const h = can.height;
    this.ctx.fillStyle = this.hue || "rgba(255,255,255,1)";
    this.ctx.fillRect(0, 0, w, h);
    const whiteGr = this.ctx.createLinearGradient(0, 0, w, 0);
    whiteGr.addColorStop(0, "rgba(255,255,255,1)");
    whiteGr.addColorStop(1, "rgba(255,255,255,0)");

    this.ctx.fillStyle = whiteGr;
    this.ctx.fillRect(0, 0, w, h);

    const blackGr = this.ctx.createLinearGradient(0, 0, 0, h);
    blackGr.addColorStop(0, "rgba(0,0,0,0)");
    blackGr.addColorStop(1, "rgba(0,0,0,1)");

    this.ctx.fillStyle = blackGr;
    this.ctx.fillRect(0, 0, w, h);

    if (this.selectedPosition) {
      this.ctx.fillStyle = "white";
      this.ctx.strokeStyle = "red";
      this.ctx.beginPath();
      this.ctx.arc(
        this.selectedPosition.x,
        this.selectedPosition.y,
        10,
        0,
        2 * Math.PI
      );
      this.ctx.lineWidth = 3;
      this.ctx.stroke();
    }
  }
}

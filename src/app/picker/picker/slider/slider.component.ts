import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html"
})
export class SliderComponent implements OnInit, AfterViewInit {
  @ViewChild("canvas") canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  private mousedown: boolean;
  private selectedHeight: number;
  color = new EventEmitter<string>();

  ngOnInit() {
    console.log("1", this.canvas);
  }

  ngAfterViewInit() {
    this.draw();
  }

  emitColor(x: number, y: number) {
    const rgba = this.getColorAtPosition(x, y);
    this.color.emit(rgba);
  }

  getColorAtPosition(x: number, y: number) {
    const imageData = this.ctx.getImageData(x, y, 1, 1).data;
    return `rgba(${imageData[0]}, ${imageData[1]}, ${imageData[2]} ,1)`;
  }

  onMouseDown(evt: MouseEvent) {
    console.log(evt);
    this.mousedown = true;
    this.selectedHeight = evt.offsetY;

    this.draw();
    this.emitColor(evt.offsetX, evt.offsetY);
  }

  onMouseMove(evt: MouseEvent) {
    if (this.mousedown) {
      this.selectedHeight = evt.offsetY;
      this.draw();
      this.emitColor(evt.offsetX, evt.offsetY);
    }
  }

  @HostListener("window: mouseup", ["$event"])
  onMousseUp(evt: MouseEvent) {
    this.mousedown = false;
    this.selectedHeight = null;
  }

  draw() {
    const can = this.canvas.nativeElement;
    console.log(can);

    if (!this.ctx) {
      this.ctx = can.getContext("2d");
    }

    const width = can.width;
    const height = can.height;

    this.ctx.clearRect(0, 0, width, height);
    const gradient = this.ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "rgba(255, 0, 0, 1)");
    gradient.addColorStop(0.17, "rgba(255, 255, 0, 1)");
    gradient.addColorStop(0.34, "rgba(0, 255, 0, 1)");
    gradient.addColorStop(0.51, "rgba(0, 255, 255, 1)");
    gradient.addColorStop(0.68, "rgba(0, 0, 255, 1)");
    gradient.addColorStop(0.85, "rgba(255, 0, 255, 1)");
    gradient.addColorStop(1, "rgba(255, 0, 0, 1)");

    this.ctx.beginPath();
    this.ctx.rect(0, 0, width, height);
    this.ctx.fillStyle = gradient;
    this.ctx.fill();
    this.ctx.closePath();

    if (this.selectedHeight) {
      console.log("llllllllll");

      this.ctx.beginPath();
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 5;
      this.ctx.rect(0, this.selectedHeight - 5, width, 10);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }

  kk() {}
}

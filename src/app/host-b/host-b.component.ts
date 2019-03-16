import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-host-b",
  template: `
    <input hostBLog />
  `
})
export class HostBComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

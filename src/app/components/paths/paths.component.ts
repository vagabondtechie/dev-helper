import { Component, OnInit } from "@angular/core";
import { Path } from "src/app/models/Path";
import { PathService } from "src/app/services/path.service";

@Component({
  selector: "app-paths",
  templateUrl: "./paths.component.html",
  styleUrls: ["./paths.component.css"]
})
export class PathsComponent implements OnInit {
  path: Path;
  paths: Path[];

  constructor(private pathService: PathService) {
    this.path = this.pathService.getEmptyPath();
    this.paths = this.pathService.loadPaths();
  }

  ngOnInit() {}

  savePath() {
    if (!this.path.description) {
      alert("Please add path description.");
      return;
    }
    if (!this.path.location) {
      alert("Please enter path location.");
      return;
    }
    this.paths.unshift(this.path);
    this.pathService.persistPaths(this.paths);
    this.path = this.pathService.getEmptyPath();
  }
}

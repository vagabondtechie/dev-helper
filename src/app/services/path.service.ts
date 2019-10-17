import { Injectable } from "@angular/core";
import { Path } from "../models/Path";

@Injectable({
  providedIn: "root"
})
export class PathService {
  constructor() {}

  persistPaths(paths: Path[]) {
    if (localStorage) {
      localStorage.setItem("paths", JSON.stringify(paths));
    }
  }

  loadPaths(): Path[] {
    if (localStorage && localStorage.getItem("paths")) {
      return JSON.parse(localStorage.getItem("paths"));
    }
    return [];
  }

  getEmptyPath(): Path {
    return {
      description: null,
      location: null
    };
  }
}

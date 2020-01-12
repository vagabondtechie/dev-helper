import { Component, OnInit } from '@angular/core';
import { Path } from 'src/app/models/Path';
import { PathService } from 'src/app/services/path.service';
import { UiHelperService } from 'src/app/services/ui-helper.service';

@Component({
  selector: 'app-paths',
  templateUrl: './paths.component.html']
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
      alert('Please add path description.');
      return;
    }
    if (!this.path.location) {
      alert('Please enter path location.');
      return;
    }
    this.paths.unshift(this.path);
    this.pathService.persistPaths(this.paths);
    this.path = this.pathService.getEmptyPath();
  }

  copyToClipboard(locationBox: HTMLInputElement, messageBox: HTMLElement) {
    try {
      locationBox.select();
      document.execCommand('copy');
      UiHelperService.showVanishingMessage(messageBox, 'Copied to clipboard.');
    } catch (error) {
      alert('Could not copy path to clipboard.');
    }
  }
}

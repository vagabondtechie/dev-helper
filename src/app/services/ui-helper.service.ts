import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UiHelperService {

  constructor() { }

  static showVanishingMessage(element: HTMLElement, message: string, showFor = 2000) {
    element.innerHTML = message;
    interval(showFor).pipe(
      take(1)
    ).subscribe(_ => element.innerHTML = '');
  }
}

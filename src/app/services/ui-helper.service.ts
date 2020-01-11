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
    if (!element.getAttribute("pending-to-vanish")) {
      element.setAttribute("pending-to-vanish", "0");
    }
    let pendingToVanish = parseInt(element.getAttribute("pending-to-vanish"));
    element.setAttribute("pending-to-vanish", "" + (pendingToVanish + 1));
    interval(showFor).pipe(
      take(1)
    ).subscribe(_ => {
      let pendingToVanish = parseInt(element.getAttribute("pending-to-vanish"));
      console.log(pendingToVanish);
      if (pendingToVanish <= 1) {
        element.innerHTML = '';
        element.setAttribute("pending-to-vanish", "0");
      } else {
        element.setAttribute("pending-to-vanish", "" + (pendingToVanish - 1));
      }
    });
  }
}

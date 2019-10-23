import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    styleUrls: ['./navbar.component.css'],
    templateUrl: './navbar.component.html'
})

export class NavbarComponent {
    navItems: any[];

    constructor() {
        this.navItems = [
            { name: 'Paths', url: '/paths', active: true },
            { name: 'Task Bucket', url: '/tasks', active: false },
            { name: 'References', url: '/references', active: false },
            { name: 'Utility functions', url: '/utilities', active: false }
        ];
    }

    activate(item) {
        this.navItems.forEach(i => i.active = false);
        item.active = true;
    }
}

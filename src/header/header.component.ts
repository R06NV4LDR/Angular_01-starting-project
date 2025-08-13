import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: false, /* Default is set to true since Angular 19 */
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})

export class HeaderComponent {}

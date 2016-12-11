import {Component, Input, ContentChild} from '@angular/core';
import {Contact} from "../../model/contact";

@Component({
    moduleId: module.id,
    selector: 'contact-viewer',
    templateUrl: 'contact-viewer.component.html',
    styleUrls: ['contact-viewer.component.css']
})
export class ContactViewerComponent {

    @Input()
    contact : Contact = new Contact();

    constructor() {
    }



}
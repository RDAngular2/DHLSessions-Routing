import {Component, OnInit, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'application-header',
    templateUrl: 'application-header.component.html'
})
export class ApplicationHeaderWithRoutingComponent {

    @Input()
    applicationName : string = "!!! dummy application name !!!";

    constructor() { }

}
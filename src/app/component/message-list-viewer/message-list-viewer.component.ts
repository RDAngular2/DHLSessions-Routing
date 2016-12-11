import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../service/contact/contact.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Contact} from "../../model/contact";

@Component({
    moduleId: module.id,
    selector: 'message-list-viewer',
    templateUrl: 'message-list-viewer.component.html',
})
export class MessageListViewerComponent implements OnInit {

    private _contact : Contact;

    constructor(private router: Router, private route : ActivatedRoute) {

    }

    refresh() {
    }


    ngOnInit() {
    }



}
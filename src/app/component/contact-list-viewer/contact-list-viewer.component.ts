import {Component, OnInit} from '@angular/core';
import {ContactService} from "../../service/contact/contact.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Contact} from "../../model/contact";

@Component({
    moduleId: module.id,
    selector: 'contact-list-viewer',
    templateUrl: 'contact-list-viewer.component.html',
})
export class ContactListViewerComponent implements OnInit {

    private contactId : number = NaN;

    contacts : Observable<Contact[]>

    constructor(private contactService : ContactService, private router: Router, private route : ActivatedRoute) {

    }

    refresh() {
        this.contacts = this.contactService.getContacts();
    }

    composeMessage(contact:Contact) : void {
        this.router.navigate(['/',{outlets:{popup:['compose',contact.id]}}])
    }

    ngOnInit() {
        this.refresh();
        this.route.params.subscribe(
          params => this.refresh()
        );
    }



}
import {Injectable} from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactData} from "../../demo-data/contact-data";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ContactService {

    constructor(private http:Http) { }

    getContacts() : Observable<Contact[]> {
        return this.http.get("api/contacts").map(
            res => res.json().data
        );
    }

    saveContact(contact:Contact) : void {
        this.http.post(`api/contacts/${contact.id}`,contact);
    }

    getContact(id:number) : Observable<Contact> {
        return this.http.get(`api/contacts/${id}`).map(
            res => res.json().data
        );
    }

}
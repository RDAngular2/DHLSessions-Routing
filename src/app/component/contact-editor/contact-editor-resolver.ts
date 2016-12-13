import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Contact} from "../../model/contact";
import {Observable} from "rxjs";
import {ContactService} from "../../service/contact/contact.service";
import {Injectable} from "@angular/core";

@Injectable()
export class ContactEditorResolver implements Resolve<Contact> {

    constructor(private contactService : ContactService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        return null;
    }
}

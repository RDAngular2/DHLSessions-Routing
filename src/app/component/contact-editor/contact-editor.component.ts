import {Component, Input, ViewChild, OnInit, Output, EventEmitter} from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactData} from "../../demo-data/contact-data";
import {NgForm} from "@angular/forms";
import {ContactService} from "../../service/contact/contact.service";
import {ToastrService} from "toastr-ng2";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import {Observable} from "rxjs";
import {ConfirmationDialogService} from "../confirmation-dialog/confirmation-dialog.service";

@Component({
    moduleId: module.id,
    selector: 'contact-editor',
    templateUrl: 'contact-editor.component.html'
})
export class ContactEditorComponent implements OnInit {

    private editing : boolean = false;

    @ViewChild(NgForm)
    contactForm : NgForm;


    private _contact : Contact = new Contact();

    constructor(private route : ActivatedRoute, private router : Router, private contactService : ContactService, private confirmationDialogService : ConfirmationDialogService, private toastr : ToastrService) { }

    get  countries() : string[] {
        return ContactData.countries;
    }

    show(value:Contact) {
        this.resetForm();
        this.setEditing(false);
        this.contact = value;
    }

    @Input()
    set contact(value : Contact) {
        this._contact = value;
    }

    get contact() : Contact {
        return this._contact;
    }

    edit() : void {
        this.setEditing(true);
    }

    save() : void {
        if (this.contactForm.valid) {
            this.contactService.saveContact(this.contact);
            this.close();
        } else {
            this.toastr.error("You need to correct your errors");
        }
    }

    cancel() : void {
        this.resetForm(this.contact);
        this.setEditing(false);
    }

    private clear() : void {
        this.resetForm();
        this.contact = new Contact();
        this.setEditing(false);
    }

    close() : void {
        this.clear();
        this.router.navigate(['..'])
    }

    resetForm(value:any={}) : void {
        this.contactForm.resetForm(value);
    }

    private setEditing(value:boolean) {
       this.editing = value;
    }

    canDeactivate() : boolean|Observable<boolean> {
        if (!this.editing) return true;

        return this.confirmationDialogService.confirm("Do you want to cancel your edits?").do(
            confirmed => {
                if (confirmed) this.clear();
            }
        );

    }

    ngOnInit(): void {
        /*
        *This only works well if you know that this same component instance is not reused because you only are given the snaphot once, after the component is
        *initialized. You can try it by uncommenting this part and commenting the next part. What happens if you change a contact in the list?
        *
        * let snapshot : ActivatedRouteSnapshot = this.route.snapshot;
        * this.contactService.getContact(snapshot.params['id']).subscribe(c => this.contact = c);
        **/

        /**
         * This will update your contact everytime, also if this component instance is reused.
         */
        this.route.params.map(params => params["id"]).
            switchMap(
                contactId => this.contactService.getContact(contactId)
            ).subscribe(
                c => this.contact = c
         );


        /**
         * But also the method above has its drawbacks. If the retrieval of the contact from the backend fails, you already have loaded your component. You could set it
         * invisible in this case. Or you could use the "resolve" functionalility in the router, than you have to write a resolver that fetches the data before the navigation is
         * finalized. This resolver will return a Promise<boolean> to the router, if you get the data from the server succesfully you will resolve the promise to "true"
         * and attach the contact to your routing context, but if there is an error fetching data you can resolve the promise to "false".
         *
         * See also the ContactEditorWithRoutingGuard for related aspects.
         */

    }


}
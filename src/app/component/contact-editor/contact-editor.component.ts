import {Component, Input, ViewChild, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactData} from "../../demo-data/contact-data";
import {NgForm} from "@angular/forms";
import {ContactService} from "../../service/contact/contact.service";
import {ToastrService} from "toastr-ng2";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';
import {Observable} from "rxjs";
import {ConfirmationDialogService} from "../confirmation-dialog/confirmation-dialog.service";

@Component({
    moduleId: module.id,
    selector: 'contact-editor',
    templateUrl: 'contact-editor.component.html'
})
export class ContactEditorComponent implements OnInit, OnDestroy {

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
        console.log("Contact editor created");

    }

    ngOnDestroy(): void {
        console.log("Contact editor destroyed");
    }

}
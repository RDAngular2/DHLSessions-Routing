import {Component, ViewChild, Output, EventEmitter, Input} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";

@Component({
    moduleId: module.id,
    selector: 'confirmation-dialog',
    templateUrl: 'confirmation-dialog.component.html'
})
export class ConfirmationDialogComponent  {

    @ViewChild(ModalDirective)
    modal : ModalDirective;

    text : string;

    @Output()
    confirmationResponse : EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    show(text:string)  {
        this.text = text;
        this.modal.show();
    }


    ok() {
        this.confirmationResponse.next(true);
        this.modal.hide();
    }

    nok() {
        this.confirmationResponse.next(false);
        this.modal.hide();
    }


}
import {Component, ViewContainerRef, ViewChild, OnInit} from '@angular/core';
import {ConfirmationDialogComponent} from "./component/confirmation-dialog/confirmation-dialog.component";
import {ConfirmationDialogService} from "./component/confirmation-dialog/confirmation-dialog.service";

@Component({
    moduleId: module.id,
    selector: 'application',
    templateUrl: 'application.component.html'
})
export class ApplicationComponent implements OnInit {

   name : string = "Angular 2 Workshop (with routing)";


   @ViewChild(ConfirmationDialogComponent)
   confirmationDialog : ConfirmationDialogComponent;

   // hack for ng2-bootstrap-modal
   constructor(public viewContainerRef:ViewContainerRef, private confirmationDialogService : ConfirmationDialogService){

   };


    ngOnInit(): void {
        this.confirmationDialogService.confirmationDialog = this.confirmationDialog;
    }
}
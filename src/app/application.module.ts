import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import {TypeaheadModule, ModalModule, ComponentsHelper} from "ng2-bootstrap";
import {ToastrModule} from "toastr-ng2";

import {ApplicationHeaderWithRoutingComponent} from "./component/application-header/application-header.component";
import {ContactScreen} from "./component/contact-screen/contact-screen.component";
import {ApplicationComponent} from "./application.component";
import {ContactEditorComponent} from "./component/contact-editor/contact-editor.component";
import {ContactListViewerComponent} from "./component/contact-list-viewer/contact-list-viewer.component";
import {EditCancelationGuard} from "./component/contact-editor/contact-editor.guard";
import {ConfirmationDialogService} from "./component/confirmation-dialog/confirmation-dialog.service";
import {ConfirmationDialogComponent} from "./component/confirmation-dialog/confirmation-dialog.component";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InboxScreenComponent} from "./component/inbox-screen/inbox-screen.component";
import {ContactData} from "./demo-data/contact-data";
import {ContactService} from "./service/contact/contact.service";
import {ContactViewerComponent} from "./component/contact-viewer/contact-viewer.component";
import {ComposeMessageDialogComponent} from "./component/message-dialog/compose-message-dialog.component";
import {MessageListViewerComponent} from "./component/message-list-viewer/message-list-viewer.component";




const applicationRoutes: Routes = [
//    { path: "", redirectTo: "/contacts", pathMatch: "full" },

];

@NgModule({
    declarations: [
        ApplicationHeaderWithRoutingComponent,
        ApplicationComponent,
        ContactScreen,
        ContactViewerComponent,
        ContactListViewerComponent,
        ContactEditorComponent,
        InboxScreenComponent,
        ConfirmationDialogComponent,

        ComposeMessageDialogComponent,
        MessageListViewerComponent


    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(applicationRoutes),
        ModalModule,
        ToastrModule,
        TypeaheadModule,

        InMemoryWebApiModule.forRoot(ContactData,{delay:1000})

    ],
    bootstrap: [ApplicationComponent],
    entryComponents: [ComposeMessageDialogComponent],
    providers: [ContactService,EditCancelationGuard,ConfirmationDialogService],
    schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicationWithRoutingModule {

}


















/* Hack for dialog */
ComponentsHelper.prototype.getRootViewContainerRef = function () {
    // https://github.com/angular/angular/issues/9293
    if (this.root) {
        return this.root;
    }
    var comps = this.applicationRef.components;
    if (!comps.length) {
        throw new Error("ApplicationRef instance not found");
    }
    try {
        /* one more ugly hack, read issue above for details */
        var rootComponent = this.applicationRef._rootComponents[0];
        this.root = rootComponent._component.viewContainerRef;
        return this.root;
    } catch (e) {
        throw new Error("ApplicationRef instance not found");
    }
};
/* End Hack for dialog */
import {Component, ViewChild, Output, EventEmitter, Input, OnInit, AfterViewInit} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'compose-message-dialog',
    templateUrl: 'compose-message-dialog.component.html'
})
export class ComposeMessageDialogComponent implements OnInit, AfterViewInit {

    @ViewChild(ModalDirective)
    modal : ModalDirective;

    text : string;

    ready:boolean=false;

    constructor(private route : ActivatedRoute, private router:Router) { }

    show()  {
        this.modal.show();
    }


    ok() {
        this.close();
    }

    nok() {
        this.close();
    }

    private close() : void {
        this.modal.hide();
        this.router.navigate([{outlets:{popup:null}}]);
    }

    ngAfterViewInit() {
        this.show();
        this.ready = true;
    }

    ngOnInit(): void {
        this.route.url.subscribe(x => {if (this.ready) this.show()});
    }
}
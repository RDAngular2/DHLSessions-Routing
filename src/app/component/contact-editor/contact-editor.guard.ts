import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {ContactEditorComponent} from "./contact-editor.component";
import {Observable} from "rxjs";

export class EditCancelationGuard  implements CanDeactivate<ContactEditorComponent> {

    canDeactivate(component: ContactEditorComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        return component.canDeactivate();
    }

}

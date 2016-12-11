import {Observable} from "rxjs";
import {ConfirmationDialogComponent} from "./confirmation-dialog.component";
/**
 * Created by Johan on 21/11/2016.
 */
export class ConfirmationDialogService {

    confirmationDialog : ConfirmationDialogComponent;

    confirm(text:string) : Observable<boolean> {
        this.confirmationDialog.show(text);
        return this.confirmationDialog.confirmationResponse;
    }

}
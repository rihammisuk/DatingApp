import { MemberEditComponent } from './../members/member-edit/member-edit.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
@Injectable()

export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {
    // tslint:disable-next-line:typedef
    canDeactivate(component: MemberEditComponent){
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue? Any Unsaved changes ill be lost.');
        }
        return true;
    }
}

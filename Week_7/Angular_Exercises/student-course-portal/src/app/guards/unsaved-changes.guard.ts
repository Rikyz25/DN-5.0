import { CanDeactivateFn } from '@angular/router';
import { ReactiveEnrollmentFormComponent } from '../features/enrollment/pages/reactive-enrollment-form/reactive-enrollment-form.component';

export const UnsavedChangesGuard: CanDeactivateFn<ReactiveEnrollmentFormComponent> = component => {
  if (!component.form.dirty) return true;
  return window.confirm('You have unsaved changes. Leave?');
};

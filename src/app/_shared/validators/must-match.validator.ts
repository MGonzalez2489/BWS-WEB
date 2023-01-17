import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class MustMatchValidator {
  static match(password: string, confirmPassword: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: any } | null => {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        confirmPasswordControl.setErrors(null);
        return null;
      }
    };
  }
}

//import { AbstractControl, ValidatorFn } from '@angular/forms';
//export default class MustMatchValidator {
//static match(controlName: string, checkControlName: string): ValidatorFn {
//return (controls: AbstractControl) => {
//const control = controls.get(controlName);
//const checkControl = controls.get(checkControlName);
//if (checkControl?.errors && !checkControl.errors['matching']) {
//return null;
//}
//if (control?.value !== checkControl?.value) {
//controls.get(checkControlName)?.setErrors({ matching: true });
//return { matching: true };
//} else {
//return null;
//}
//};
//}
//}

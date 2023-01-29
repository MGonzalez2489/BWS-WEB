import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BWSFormGroup } from '@core/classes';
import { DestroyHook } from '@core/components';
import { Store } from '@ngrx/store';
import MustMatchValidator from '@shared/validators/must-match.validator';
import { SigninAction } from '@store/actions';
import { BWSState } from '@store/states';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  signInForm: BWSFormGroup;
  constructor(private store: Store<BWSState>, private fb: FormBuilder) {
    this.initializeForm();
  }
  get form() {
    return this.signInForm.controls;
  }
  initializeForm(): void {
    this.signInForm = this.fb.group(
      {
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl(
          '',
          Validators.compose([Validators.required])
        ),
        rememberMe: new FormControl(false, [Validators.required]),
      },
      {
        validator: MustMatchValidator.match('password', 'confirmPassword'),
      }
    );
  }
  signin(): void {
    this.signInForm.isSubmited = true;
    if (!this.signInForm.valid) return;

    const params = this.signInForm.value;
    delete params.confirmPassword;
    this.store.dispatch(SigninAction({ params }));
  }
}

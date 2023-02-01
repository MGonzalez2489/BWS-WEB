import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BWSFormGroup } from '@core/classes';
import { Store } from '@ngrx/store';
import { LoginAction } from '@store/actions';
import { BWSState } from '@store/states';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: BWSFormGroup;
  constructor(private store: Store<BWSState>, private fb: FormBuilder) {
    this.initializeForm();
  }
  get form() {
    return this.loginForm.controls;
  }
  initializeForm(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      rememberMe: new FormControl(false, [Validators.required]),
    });
  }
  login(): void {
    this.loginForm.isSubmited = true;
    if (!this.loginForm.valid) return;
    this.store.dispatch(LoginAction({ params: this.loginForm.value }));
  }
}

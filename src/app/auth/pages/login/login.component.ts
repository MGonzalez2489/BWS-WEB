import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginAction } from '@store/actions';
import { BWSState } from '@store/states';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private store: Store<BWSState>) {
    console.log('entro');
  }

  login(): void {
    const params = {
      email: 'consumer@test.com',
      password: '1234',
      rememberMe: false,
    };
    this.store.dispatch(LoginAction({ params }));
  }
}

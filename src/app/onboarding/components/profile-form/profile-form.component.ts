import { Component, Input, OnInit } from '@angular/core';
import { DestroyHook } from '@core/components';
import { Store } from '@ngrx/store';
import { IUser } from '@shared/models';
import { BWSState } from '@store/states';
import * as UserActions from '@store/actions/user.actions';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent extends DestroyHook implements OnInit {
  @Input()
  user: IUser;
  constructor(private store: Store<BWSState>) {
    super();
  }
  ngOnInit(): void {}

  createConsumerProfile(): void {
    this.store.dispatch(
      UserActions.CreateConsumerProfileAction({ userId: this.user.publicId })
    );
  }
  createArtistProfile(): void {
    this.store.dispatch(
      UserActions.CreateArtistProfileAction({ userId: this.user.publicId })
    );
  }
}

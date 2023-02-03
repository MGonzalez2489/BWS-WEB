import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUser } from '@shared/models';
import { DestroyHook } from '@shared/components';
import { AppState } from '@store/states/app.state';
import {
  CreateArtistProfileAction,
  CreateConsumerProfileAction,
} from '@store/actions/profile.actions';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent extends DestroyHook implements OnInit {
  @Input()
  user: IUser;
  constructor(private store: Store<AppState>) {
    super();
  }
  ngOnInit(): void {}

  createConsumerProfile(): void {
    this.store.dispatch(
      CreateConsumerProfileAction({ userId: this.user.publicId })
    );
  }
  createArtistProfile(): void {
    this.store.dispatch(
      CreateArtistProfileAction({ userId: this.user.publicId })
    );
  }
}

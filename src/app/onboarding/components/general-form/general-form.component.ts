import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUser } from '@shared/models';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BWSFormGroup } from '@core/classes';
import { GenderEnum } from '@shared/enums';
import { UtilEnum } from '@shared/util';
import { DestroyHook } from '@shared/components';
import { AppState } from '@store/states/app.state';
import { UpdateUserAction } from '@store/actions/user.actions';

@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.scss'],
})
export class GeneralFormComponent extends DestroyHook implements OnInit {
  @Input()
  user: IUser;
  userForm: BWSFormGroup;
  availableGender = UtilEnum.enumToArray(GenderEnum);
  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    super();
  }
  ngOnInit(): void {
    this.initializeForm();
  }
  get form() {
    return this.userForm.controls;
  }

  initializeForm(): void {
    this.userForm = this.fb.group({
      firstName: new FormControl(this.user.firstName, [Validators.required]),
      lastName: new FormControl(this.user.lastName, [Validators.required]),
      phone: new FormControl(this.user.phone, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      gender: new FormControl(-1, [Validators.required, Validators.min(1)]),
    });
  }
  submit(): void {
    this.userForm.isSubmited = true;
    if (!this.userForm.valid) {
      return;
    }
    const updatedUser: IUser = {
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName,
      phone: this.userForm.value.phone,
      gender: this.userForm.value.gender,
      email: null,
      fullName: null,
      boardingRequired: null,
      publicId: null,
      createdAt: null,
      consumerProfile: this.user.consumerProfile,
      artistProfile: this.user.artistProfile,
    };
    this.store.dispatch(UpdateUserAction({ user: updatedUser }));
  }
}

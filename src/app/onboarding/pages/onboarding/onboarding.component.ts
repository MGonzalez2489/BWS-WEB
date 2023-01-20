import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DestroyHook } from '@core/components';
import { Store } from '@ngrx/store';
import { IUser } from '@shared/models';
import { getUser } from '@store/selectors';
import { BWSState } from '@store/states';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent extends DestroyHook {
  user: IUser;
  currentStep: 'profile' | 'general';
  constructor(private store$: Store<BWSState>, private router: Router) {
    super();
    this.store$.select(getUser).subscribe((data) => {
      this.user = data;
      this.updateCurrentStep();
    });
  }
  updateCurrentStep(): void {
    if (!this.user.artistProfile && !this.user.consumerProfile) {
      this.currentStep = 'profile';
    }

    if (this.user.consumerProfile) {
      if (this.user.boardingRequired) {
        this.currentStep = 'general';
      } else {
        this.router.navigate(['/1']);
      }
    } else if (this.user.artistProfile) {
      if (this.user.boardingRequired) {
        this.currentStep = 'general';
      } else {
        //TODO: add first services route
        this.router.navigate(['/2']);
      }
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DestroyHook } from '@core/components';
import { Store } from '@ngrx/store';
import { OnboardingStepsEnum } from '@shared/enums';
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
  currentStep: OnboardingStepsEnum = OnboardingStepsEnum.profile;
  constructor(private store$: Store<BWSState>, private router: Router) {
    super();
    this.store$.select(getUser).subscribe((data) => {
      this.user = data;
      this.updateCurrentStep();
    });
  }
  updateCurrentStep(): void {
    if (!this.user.artistProfile && !this.user.consumerProfile) {
      this.currentStep = OnboardingStepsEnum.profile;
    } else {
      this.user.consumerProfile
        ? this.generateConsumerOnboardingStep()
        : this.generateArtistOnboardingStep();
    }
  }

  private generateConsumerOnboardingStep(): void {
    if (!this.user.fullName || this.user.fullName === '') {
      this.currentStep = OnboardingStepsEnum.general;
    } else {
      this.currentStep = OnboardingStepsEnum.none;
    }
    if (this.currentStep === OnboardingStepsEnum.none) {
      this.router.navigate(['/1']);
    }
  }
  private generateArtistOnboardingStep(): void {
    if (this.user.fullName || this.user.fullName === '') {
      this.currentStep = OnboardingStepsEnum.general;
    } else {
      this.currentStep = OnboardingStepsEnum.none;
    }
    if (this.currentStep === OnboardingStepsEnum.none) {
      this.router.navigate(['/2']);
    }
  }
}

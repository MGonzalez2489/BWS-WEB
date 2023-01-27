import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DestroyHook } from '@core/components';
import { Store } from '@ngrx/store';
import { OnboardingStepsEnum } from '@shared/enums';
import { ICategory, IUser } from '@shared/models';
import { BWSState } from '@store/states';
import * as ProviderActions from '@store/actions/provider.actions';
import { getCategories, getUser } from '@store/selectors';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent extends DestroyHook {
  user: IUser;
  currentStep: OnboardingStepsEnum = OnboardingStepsEnum.profile;
  categories: ICategory[];
  constructor(private store$: Store<BWSState>, private router: Router) {
    super();
    this.store$.dispatch(ProviderActions.GetCategoriesAction());
    this.store$
      .select(getUser)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.user = data;
        this.updateCurrentStep();
      });

    this.store$
      .select(getCategories)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.categories = data;
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
    if (!this.categories || this.categories.length === 0) {
    }
    if (!this.user.fullName || this.user.fullName === '') {
      this.currentStep = OnboardingStepsEnum.general;
    } else if (
      !this.user.artistProfile.services ||
      this.user.artistProfile.services.length == 0
    ) {
      this.currentStep = OnboardingStepsEnum.services;
    } else {
      this.currentStep = OnboardingStepsEnum.none;
    }
    if (this.currentStep === OnboardingStepsEnum.none) {
      this.router.navigate(['/2']);
    }
  }
}

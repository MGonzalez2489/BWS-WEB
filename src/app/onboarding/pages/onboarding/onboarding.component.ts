import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { OnboardingStepsEnum } from '@shared/enums';
import { ICategory, IUser } from '@shared/models';
import { BWSState } from '@store/states';
import * as ProviderActions from '@store/actions/provider.actions';
import { getCategories, getUser } from '@store/selectors';
import { takeUntil } from 'rxjs';
import { DestroyHook } from '@shared/components';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent extends DestroyHook {
  user: IUser;
  currentStep: OnboardingStepsEnum;
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
    let newStep: OnboardingStepsEnum;
    if (!this.user.artistProfile && !this.user.consumerProfile) {
      newStep = OnboardingStepsEnum.profile;
    } else {
      newStep = this.user.consumerProfile
        ? this.generateConsumerOnboardingStep()
        : this.generateArtistOnboardingStep();
    }
    this.currentStep = newStep;
    if (this.currentStep == OnboardingStepsEnum.none) {
      if (this.user.artistProfile) {
        this.router.navigate(['/2']);
      } else if (this.user.consumerProfile) {
        this.router.navigate(['/2']);
      }
    }
  }

  private generateConsumerOnboardingStep(): OnboardingStepsEnum {
    let step: OnboardingStepsEnum;
    if (!this.user.fullName || this.user.fullName === '') {
      step = OnboardingStepsEnum.general;
    } else {
      step = OnboardingStepsEnum.none;
    }
    return step;
  }
  private generateArtistOnboardingStep(): OnboardingStepsEnum {
    let step: OnboardingStepsEnum;
    if (!this.user.fullName || this.user.fullName === '') {
      step = OnboardingStepsEnum.general;
    } else if (
      !this.user.artistProfile.services ||
      this.user.artistProfile.services.length == 0
    ) {
      step = OnboardingStepsEnum.services;
    } else {
      step = OnboardingStepsEnum.none;
    }
    return step;
  }
}

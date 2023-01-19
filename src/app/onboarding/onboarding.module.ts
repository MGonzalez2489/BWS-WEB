import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { GeneralFormComponent } from './components/general-form/general-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OnboardingComponent,
    ProfileFormComponent,
    GeneralFormComponent,
  ],
  imports: [CommonModule, OnboardingRoutingModule, ReactiveFormsModule],
})
export class OnboardingModule {}

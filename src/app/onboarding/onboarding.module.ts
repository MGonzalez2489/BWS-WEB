import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { GeneralFormComponent } from './components/general-form/general-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgxMaskDirective,
  NgxMaskPipe,
  provideEnvironmentNgxMask,
} from 'ngx-mask';
import { ServicesFormComponent } from './components/services-form/services-form.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    OnboardingComponent,
    ProfileFormComponent,
    GeneralFormComponent,
    ServicesFormComponent,
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    SharedModule,
  ],
  providers: [provideEnvironmentNgxMask()],
})
export class OnboardingModule {}

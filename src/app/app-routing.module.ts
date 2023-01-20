import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'onboarding',
    loadChildren: () =>
      import('./onboarding/onboarding.module').then((m) => m.OnboardingModule),
  },
  {
    path: '1',
    loadChildren: () =>
      import('./consumer/consumer.module').then((m) => m.ConsumerModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

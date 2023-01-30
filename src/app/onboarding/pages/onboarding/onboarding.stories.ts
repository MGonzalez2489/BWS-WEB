import { StoreModule } from '@ngrx/store';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { OnboardingComponent } from './onboarding.component';
export default {
  /* ?? The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Onboarding/pages/onboarding',
  component: OnboardingComponent,
  decorators: [
    moduleMetadata({
      imports: [StoreModule.forRoot({})],
    }),
  ],
} as Meta;

export const Onboarding: Story = () => ({
  props: {},
});

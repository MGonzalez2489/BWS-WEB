import { StoreModule } from '@ngrx/store';
import { OnboardingStepsEnum } from '@shared/enums';
import { SharedModule } from '@shared/shared.module';
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
      imports: [StoreModule.forRoot({}), SharedModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Onboarding = Template.bind({});

Onboarding.args = {
  currentStep: OnboardingStepsEnum.none,
};

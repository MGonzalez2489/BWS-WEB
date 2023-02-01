import { StoreModule } from '@ngrx/store';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ProfileFormComponent } from './profile-form.component';
export default {
  /* ?? The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Onboarding/components/profile-form',
  component: ProfileFormComponent,
  decorators: [
    moduleMetadata({
      imports: [StoreModule.forRoot({})],
    }),
  ],
} as Meta;

export const ProfileForm: Story = () => ({
  props: {},
});

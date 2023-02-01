import { StoreModule } from '@ngrx/store';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ServicesFormComponent } from './services-form.component';
export default {
  /* ?? The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Onboarding/components/services-form',
  component: ServicesFormComponent,
  decorators: [
    moduleMetadata({
      imports: [StoreModule.forRoot({})],
    }),
  ],
} as Meta;

export const ServicesForm: Story = () => ({
  props: {},
});

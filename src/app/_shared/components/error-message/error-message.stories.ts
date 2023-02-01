import { StoreModule } from '@ngrx/store';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ErrorMessageComponent } from './error-message.component';
export default {
  /* ?? The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Shared/layout/navbar',
  component: ErrorMessageComponent,
  decorators: [
    moduleMetadata({
      imports: [StoreModule.forRoot({})],
    }),
  ],
} as Meta;

export const ErrorMessage: Story = () => ({
  props: {},
});

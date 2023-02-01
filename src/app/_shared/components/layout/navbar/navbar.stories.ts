import { Meta, Story } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';
export default {
  /* ?? The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Shared/layout/navbar',
  component: NavbarComponent,
} as Meta;

export const Navbar: Story = () => ({
  props: {},
});

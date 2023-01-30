import { NgModule } from '@angular/core';
import {
  NavbarArtistComponent,
  NavbarComponent,
  NavbarConsumerComponent,
} from './components/layout';

@NgModule({
  declarations: [
    NavbarComponent,
    NavbarArtistComponent,
    NavbarConsumerComponent,
  ],
  imports: [],
  exports: [NavbarComponent],
})
export class SharedModule {}

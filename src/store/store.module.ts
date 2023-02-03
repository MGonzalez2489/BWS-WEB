import { NgModule } from '@angular/core';
import { environment } from '@environment/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppEffects } from './effects';
import { AppReducers } from './reducers';

let imports = [
  StoreModule.forRoot(AppReducers),
  EffectsModule.forRoot(AppEffects),
];
let providers: any[] = [];
let declarations: any[] = [];

if (!environment.production) {
  imports = [...imports, StoreDevtoolsModule.instrument({ maxAge: 500 })];
}

@NgModule({
  imports,
  providers,
  declarations,
})
export class BWSStoreModule {}

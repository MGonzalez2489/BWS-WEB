import { NgModule } from '@angular/core';
import { environment } from '@environment/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { effects } from './effects';
import { reducers } from './reducers';

let imports = [StoreModule.forRoot(reducers), EffectsModule.forRoot(effects)];
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

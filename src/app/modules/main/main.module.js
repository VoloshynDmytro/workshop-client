import { NgModule } from '@angular/core';
import { SharedModule }  from '../../shared/shared.module';
import { HomeComponent } from './home';
import { UiKitComponent  } from './ui-kit';
import { PageNotFoundComponent } from './page-not-found';
import { mainRouting } from './main.routing';

@NgModule({
  declarations: [
    HomeComponent,
    UiKitComponent,
    PageNotFoundComponent
  ],
  imports: [
    SharedModule,
    mainRouting
  ],
})

export class MainModule {}
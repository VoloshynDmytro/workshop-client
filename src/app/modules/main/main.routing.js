import { RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { UiKitComponent  } from './ui-kit';
import { PageNotFoundComponent } from './page-not-found';

export const mainRouting =  RouterModule.forChild([
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'ui-kit',
    component: UiKitComponent
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  }
]);

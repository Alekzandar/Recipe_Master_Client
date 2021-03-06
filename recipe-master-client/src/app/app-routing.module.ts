import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TawbinViewComponent }      from './tawbin-view/tawbin-view.component';
import { AleksandarViewComponent }      from './aleksandar-view/aleksandar-view.component';
import { JackyViewComponent }      from './jacky-view/jacky-view.component';
import { MaressaViewComponent }      from './maressa-view/maressa-view.component';
import { TestServerComponent }      from './test-server/test-server.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { MainViewComponent }      from './main-view/main-view.component';

import { UserRegisterComponent } from './user-register/user-register.component';
import { UserDashComponent } from './user-dash/user-dash.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '*', redirectTo: '/main', pathMatch: 'full' },
  { path: 'recipe', component: TawbinViewComponent },
  { path: 'aleksandar', component: AleksandarViewComponent },
  { path: 'jacky', component: JackyViewComponent },
  { path: 'maressa', component: MaressaViewComponent },
  { path: 'test', component: TestServerComponent },
  { path: 'registration', component: UserRegisterComponent },
  { path: 'user-dash', component: UserDashComponent },
  { path: 'main', component: MainViewComponent },
  { path: 'detail', component: RecipeDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TawbinViewComponent }      from './tawbin-view/tawbin-view.component';
import { AleksandarViewComponent }      from './aleksandar-view/aleksandar-view.component';
import { JackyViewComponent }      from './jacky-view/jacky-view.component';
import { MaressaViewComponent }      from './maressa-view/maressa-view.component';


const routes: Routes = [
  { path: 'tawbin', component: TawbinViewComponent },
  { path: 'aleksandar', component: AleksandarViewComponent },
  { path: 'jacky', component: JackyViewComponent },
  { path: 'maressa', component: MaressaViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
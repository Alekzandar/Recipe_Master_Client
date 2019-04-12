import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TawbinViewComponent } from './tawbin-view/tawbin-view.component';
import { JackyViewComponent } from './jacky-view/jacky-view.component';
import { MaressaViewComponent } from './maressa-view/maressa-view.component';
import { AleksandarViewComponent } from './aleksandar-view/aleksandar-view.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    TawbinViewComponent,
    JackyViewComponent,
    MaressaViewComponent,
    AleksandarViewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TawbinViewComponent } from './tawbin-view/tawbin-view.component';
import { JackyViewComponent } from './jacky-view/jacky-view.component';
import { MaressaViewComponent } from './maressa-view/maressa-view.component';
import { AleksandarViewComponent } from './aleksandar-view/aleksandar-view.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { TestServerComponent } from './test-server/test-server.component';
import { UserRegisterComponent } from './user-register/user-register.component';

import { MainViewComponent } from './main-view/main-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TawbinViewComponent,
    JackyViewComponent,
    MaressaViewComponent,
    AleksandarViewComponent,
    TestServerComponent,
    UserRegisterComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

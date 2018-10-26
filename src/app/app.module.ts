import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { NgxMaskModule } from 'ngx-mask';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { HeaderComponent } from './layout/header/header.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';

import { ComponentComponent } from './component/component.component';
import { ModelsComponent } from './models/models.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormComponent } from './form/form.component';
import { SaveFormComponent } from './form/save-form/save-form.component';
import { LoginComponent } from './login/login.component';
import { OtherLibraryComponent } from './other-library/other-library.component';
import { BroadcastingComponent } from './broadcasting/broadcasting.component';


import { UserService } from './shared/user.service';
import { BroadcastService } from './shared/broadcast.service';


import { MonthFormat } from './pipes/month-format.pipe';
@NgModule({
  declarations: [
    AppComponent,

    LayoutComponent,
    HeaderComponent,
    SideBarComponent,


    ComponentComponent,
    ModelsComponent,
    DirectivesComponent,
    PipesComponent,
    FormComponent,
    SaveFormComponent,
    LoginComponent,
    OtherLibraryComponent,
    BroadcastingComponent,

    MonthFormat
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    NgxMaskModule.forRoot()
  ],
  providers: [UserService, BroadcastService],
  bootstrap: [AppComponent]
})
export class AppModule { }

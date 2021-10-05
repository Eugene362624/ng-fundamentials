import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TOASTR_TOKEN, Toastr, CollapsibleWellComponent } from './common/index';
import { Error404Component } from './errors/404.component';

import {
  CreateEventComponent, EventDetailsComponent, EventRouteActivator, EventsListComponent, EventThumbnailComponent, EventService, EventListResolver, CreateSessionComponent, SessionListComponent, DurationPipe
} from './events/index'

import { AppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes'
import { LoginComponent } from './user/login.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

declare let toastr:Toastr

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [
    EventService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventListResolver,
    AuthService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this! Do you really want to cancel?')
  return true
}
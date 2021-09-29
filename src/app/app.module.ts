import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';

import {
  CreateEventComponent, EventDetailsComponent, EventRouteActivator, EventsListComponent, EventThumbnailComponent, EventService, EventListResolver
} from './events/index'

import { AppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes'

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventListResolver
  ],
  imports: [
    BrowserModule,
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
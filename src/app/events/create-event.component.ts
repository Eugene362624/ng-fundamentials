import { Component } from "@angular/core";
import {Router} from '@angular/router'
import { EventService, IEvent } from ".";

@Component({
    templateUrl: "./create-event.component.html",
    styles: [`
    em {float: right; color: #e05c65; padding-left: 10px}
    .error input {background-color: #e3c3c5}
    .error ::-webkit-input-placeholder {color: #999}
    .error ::-moz-placeholder {color: #999}
    .error :-moz-placeholder {color: #999}
    .error :ms-input-placeholder {color: #999}
  `]
})

export class CreateEventComponent {
    isDirty: boolean = true
    newEvent: IEvent
    event: any
    // newEvent: {name: string, imageUrl: string, onlineUrl: string, country: string, city: string, address: string, price: number, time: string, date: Date}
    constructor(private router: Router, private eventService: EventService) {

    }

    saveEvent(formValues:IEvent) {
        this.eventService.saveEvent(formValues)
        this.isDirty = false
        this.router.navigate(['/events'])
    }

    ngOnInit() {
        this.event = {
            name: 'dsadas',
            date: '8/8/2028',
            time: '10:00 am',
            price: 788.88,
            location: {
                address: '231',
                city: 'orsha',
                country: 'belarus'
            },
            onlineUrl: 'http://google.com',
            imageUrl: 'http://google.com'
        }
    }

    cancel() {
        this.router.navigate(['/events'])
    }
}
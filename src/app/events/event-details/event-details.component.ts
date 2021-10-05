import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { EventService } from "../shared/event.service";
import {IEvent} from '../index'
import { ISession } from "../shared";

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container {padding-left: 20px; padding-right: 20px}
        .event-image {height: 100px}
        a {cursor: pointer}
    `]
})

export class EventDetailsComponent {
    event: IEvent | undefined | number[] | any
    filterBy: "beginner" | "intermediate" | "advanced" | "all" = 'all'
    sortBy: 'votes' | 'name' = 'name'

    constructor (private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit() {

        this.route.params.forEach((params: Params) => {
            this.event = this.eventService.getEvent(+params['id'])
            this.addMode = false
        })
    }

    addMode:boolean
    addSession() {

        this.addMode = true
    }
    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event?.sessions.map((s: { id: any; }) => s.id))
        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode = false
    }



    cancelAddSession() {
        this.addMode = false
    }
}
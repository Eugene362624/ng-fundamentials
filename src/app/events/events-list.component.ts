import {Component} from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/27/2021',
        time: '5:00 pm',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}
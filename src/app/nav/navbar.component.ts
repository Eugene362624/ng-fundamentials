import { Component } from "@angular/core";
import { EventService, ISession } from "../events";
import { AuthService } from "../user/auth.service";

@Component({
    selector: "nav-bar",
    templateUrl: "./navbar.component.html",
    styles: [`
        .navbar {border-radius: 5px}
        li>a.active {color: #f97924; background-color: #494949}
        .nav.navbar-nav {font-size: 15px}
        .navbar-form .btn {font-weight: 700}
        .navbar-form .btn:hover {color: #bbb}
        .navbar-form input {border-radius: 5px}
        #searchForm {margin-right: 100px}
        @media (max-width: 1200px) {#searchForm  {display: none}}
    `]
})

export class NavBarComponent{
    searchTerm: string = ''
    public foundSessions: ISession[] = []

    constructor(
        public auth:AuthService,
        private eventService: EventService
        ) {
    }

    searchSessions(searchTerm: any) {
        this.eventService.searchSessions(searchTerm).subscribe((sessions:any) => {
            this.foundSessions = sessions
        })
    }
}
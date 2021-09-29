import { Component } from "@angular/core";


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

}
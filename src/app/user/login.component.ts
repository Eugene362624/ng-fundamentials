import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em {float: right; color: #e05c65; padding-left: 10px}
    `]
})

export class LoginComponent {
    userName:string
    password:string
    mouseoverLogin:boolean
    constructor(private authService:AuthService, private router:Router) {

    }
    login(formValues:{userName:string, password: string}):void {
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['user/profile'])
    }
    
    cancel() {
        this.router.navigate(['events'])
    }
}
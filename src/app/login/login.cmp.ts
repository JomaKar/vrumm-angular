import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { HttpService } from '../services/httpService.srv';
import { UserService } from '../services/userService.srv';

@Component({
	moduleId: module.id,
	selector: 'vrumm-login',
	templateUrl: 'login.tmp.html',
	styleUrls: []
})

export class VrummLogin{
	forgotPassword: boolean = false;
	formSubmitError: boolean = false;
	loginError: boolean = false;

	loginUser: Object = {
		email: '',
		passw: ''
	};

	constructor(private route: Router, private httpS: HttpService, private usrSer: UserService){}

	forgotPasswordProcess(){
		this.forgotPassword = !this.forgotPassword;

	}

	onSubmit(loginForm: NgForm){
		// console.log(loginForm);
		// console.log(loginForm.value);
		this.httpS.login(loginForm.value).subscribe(res => {
			if(res.ok){
				let result = res.json();
				console.log(result);
				if(result.estado === 1){
					let id = result.mensaje.rs;
					this.usrSer.setLoggedUserID(id);
					this.httpS.userGetInfo(id).subscribe(res => {
						if(res.ok){
							let result = res.json();
							if(result.estado === 1){
								let userAlias = result.mensaje.rs[0].alias;
								this.usrSer.passingLoggedUserInfo(result.mensaje.rs[0]);
								this.usrSer.loggedUser(true);
								this.route.navigate(['app/perfil', userAlias]);
							}else{
								this.loginError = true;
							}
						}
					});

				}else{
					this.formSubmitError = true;
				}
			}
		});
	}

	toRegister(){
		this.route.navigate(['/registro']);
	}

	toBrands(){
		this.route.navigate(['/app/catalogo']);	
	}
}
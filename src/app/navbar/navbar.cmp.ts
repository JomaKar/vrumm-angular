import { Component, AfterViewInit, ElementRef, Renderer, ViewChild, OnInit } from '@angular/core';

import { windowWidthService } from '../services/windowWidthService.srv';
import { UserService } from '../services/userService.srv';

@Component({
	moduleId: module.id,
	selector: 'vrumm-navbar',
	templateUrl: 'navbar.tmp.html',
	styleUrls: []
})

export class VrummNavbar implements AfterViewInit, OnInit{
	activeUsr: boolean = false;
	activeUserInfo: Object = {};
	navbarDown: boolean = false;
	noInLoggedUsrProfile: boolean = false;
	smMenuDown: boolean = false;
	@ViewChild('configLink1') configLink1: ElementRef;
	@ViewChild('dropdownItem') dropdownItem: ElementRef;
	@ViewChild('configLinkDisable') configLinkDisable: ElementRef;
	@ViewChild('smDropDownMenu') smDropDownMenu: ElementRef;
	@ViewChild('fotoNavbarLink') fotoNavbarLink: ElementRef;


	constructor(private renderer: Renderer, private wwSrv: windowWidthService, private usrS: UserService){
	}

	ngOnInit(){
		this.activeUserInfo = (this.usrS.loggedUsrInfo !== {}) ? this.usrS.loggedUsrInfo : {};
		if(this.usrS.actualUsrAlias.length > 0){

			this.noInLoggedUsrProfile = (this.activeUserInfo['alias'] == this.usrS.actualUsrAlias) ? true : false;
			if(this.noInLoggedUsrProfile){
				console.log(this.fotoNavbarLink);
				// this.renderer.setElementStyle(this.fotoNavbar.nativeElement, 'background-image', `url(${this.activeUserInfo['foto_perfil']})`);
			}
		}
		console.log(this.activeUserInfo['foto_perfil']);
		// console.log(this.noInLoggedUsrProfile);
		this.activeUsr = this.usrS.isLoggedUser;
	}


	ngAfterViewInit(){
		// console.log(this.configLink1, this.configLinkDisable);

		(this.activeUsr) 
						? 
						(
							this.renderer.setElementClass(this.configLink1.nativeElement, 'disabled', false),
							this.renderer.setElementClass(this.configLinkDisable.nativeElement, 'disabled', false)
						) : 
						(
							this.renderer.setElementClass(this.configLink1.nativeElement, 'disabled', true),
							this.renderer.setElementClass(this.configLinkDisable.nativeElement, 'disabled', true)
						);
	}

	shareModal(){

	}

	dropMenu(){
		(!this.navbarDown) ? this.renderer.setElementClass(this.dropdownItem.nativeElement, 'open', true) : this.renderer.setElementClass(this.dropdownItem.nativeElement, 'open', false);
		this.navbarDown = !this.navbarDown;
	}

	dropFirstMenu(){
		let iW = this.wwSrv.innerWidthOutput();
		(!this.smMenuDown && iW < 768) ? this.renderer.setElementClass(this.smDropDownMenu.nativeElement, 'in', true) : this.renderer.setElementClass(this.smDropDownMenu.nativeElement, 'in', false);
		this.smMenuDown = !this.smMenuDown;
	}
}
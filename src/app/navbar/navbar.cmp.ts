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
	activeUser: Object = {};
	navbarDown: boolean = false;
	smMenuDown: boolean = false;
	@ViewChild('configLink1') configLink1: ElementRef;
	@ViewChild('dropdownItem') dropdownItem: ElementRef;
	@ViewChild('configLinkDisable') configLinkDisable: ElementRef;
	@ViewChild('smDropDownMenu') smDropDownMenu: ElementRef;

	constructor(private renderer: Renderer, private wwSrv: windowWidthService, private usrS: UserService){}

	ngOnInit(){
		this.usrS.loggedUserVal$.subscribe(val => {console.log(val)});
		this.usrS.userID.subscribe(id => {console.log(id)});
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
import { Component, OnInit, ElementRef, Renderer, ViewChild } from '@angular/core';

import { windowWidthService } from '../services/windowWidthService.srv';

@Component({
	moduleId: module.id,
	selector: 'sideimg-vrumm',
	templateUrl: 'sideImage.tmp.html'
})

export class SideImageOutOfApp implements OnInit{
	
	@ViewChild('sideImageCont') sideImageCont: ElementRef;
	@ViewChild('sideImg') sideImg: ElementRef;

	constructor(private wwS: windowWidthService, private renderer: Renderer){}

	ngOnInit(){
		let initialWindowWidth: number = this.wwS.innerWidthOutput();
		this.adjustOnSize(initialWindowWidth);
		// console.log(this.sideImg);
	}

	resizing(){
		let sizableWidth: number = this.wwS.innerWidthOutput();
		this.adjustOnSize(sizableWidth);
	}

	adjustOnSize(theWidth: number){
		// console.log(theWidth);
		
		if(theWidth < 880){
			this.renderer.setElementStyle(this.sideImg.nativeElement, 'width', '387px');
			this.renderer.setElementStyle(this.sideImg.nativeElement, 'left', '-6%');
		}else if(theWidth > 880 && theWidth < 975){
			this.renderer.setElementStyle(this.sideImg.nativeElement, 'width', '459px');
			this.renderer.setElementStyle(this.sideImg.nativeElement, 'left', '0');
		}else if(theWidth >= 975){
			
			this.renderer.setElementStyle(this.sideImg.nativeElement, 'left', '0');

			if(theWidth < 1070){
				this.renderer.setElementStyle(this.sideImg.nativeElement.parentElement, 'text-align', 'center');
				this.renderer.setElementStyle(this.sideImg.nativeElement, 'width', '459px');
			}else if(theWidth > 1070 && theWidth < 1278){
				this.renderer.setElementStyle(this.sideImg.nativeElement, 'width', '535px');
				this.renderer.setElementClass(this.sideImageCont.nativeElement, 'col-lg-5', false);
				
				this.renderer.setElementClass(this.sideImageCont.nativeElement, 'col-lg-offset-1', false);
			}else if(theWidth > 1278){
				this.renderer.setElementStyle(this.sideImg.nativeElement, 'width', '535px');

				this.renderer.setElementClass(this.sideImageCont.nativeElement, 'col-lg-5', true);
				this.renderer.setElementClass(this.sideImageCont.nativeElement, 'col-lg-offset-1', true);

				this.renderer.setElementClass(this.sideImageCont.nativeElement, 'col-lg-offset-2', false);
				this.renderer.setElementClass(this.sideImageCont.nativeElement, 'col-lg-4', false);

				if(theWidth > 1600){
					this.renderer.setElementStyle(this.sideImg.nativeElement.parentElement, 'text-align', 'right');
				}
			}
		}

	}
}
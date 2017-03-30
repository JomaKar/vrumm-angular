import { Directive, HostBinding, HostListener, ElementRef, Renderer, AfterViewInit } from '@angular/core'

@Directive({
	selector: '[correctElementHightOnGrid]'
})

export class correctElementHightOnGridDirective implements AfterViewInit{
	totalElementWidth: number;
	windowWidth : number;

	// to set this numbers
	totalPaddingOnThree: number = 90;
	totalPaddingOnFour: number = 120;

	constructor(private elR: ElementRef, private ren: Renderer){
		// console.log(elR);
	}

	ngAfterViewInit(){
		this.windowWidth = this.elR.nativeElement.parentElement.clientWidth;
		this.totalElementWidth = this.elR.nativeElement.clientWidth;
		this.forceWidth();
	}

	@HostListener('window:resize') onResize(){
		this.windowWidth = this.elR.nativeElement.parentElement.clientWidth;
		this.totalElementWidth = this.elR.nativeElement.clientWidth;
		this.forceWidth();
	}

	forceWidth(){
		let correctHeight = (this.windowWidth < 768) ? (this.windowWidth - this.totalPaddingOnThree)/3 :  (this.windowWidth - this.totalPaddingOnFour)/4;
		this.ren.setElementStyle(this.elR.nativeElement, 'height', `${correctHeight}px`);
	}

}
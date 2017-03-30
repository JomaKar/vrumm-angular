import { Directive, HostBinding, HostListener, ElementRef, Renderer, Input, AfterViewInit } from '@angular/core'

@Directive({
	selector: '[noMoreGrow]'
})

export class noMoreGrowDirective implements AfterViewInit{
	totalWidth: number;

	constructor(private elR: ElementRef, private ren: Renderer){
		// console.log(elR);
	}

	@Input('noMoreGrow') maxWidth = '1200';

	ngAfterViewInit(){
		let startingWidth = this.elR.nativeElement.parentElement.clientWidth;
		this.totalWidth = startingWidth;
		this.forceWidth(startingWidth);
	}

	@HostListener('window:resize') onResize(){
		let startingWidth = this.elR.nativeElement.parentElement.clientWidth;
		this.totalWidth = startingWidth;
		this.forceWidth(startingWidth);
	}

	forceWidth(someWidth: number){
		// console.log(someWidth, 'from directive');
		if(someWidth >= 1200){
			// console.log('im up');
			this.ren.setElementStyle(this.elR.nativeElement, 'width', `${this.maxWidth}px`);
		}else{
			this.ren.setElementStyle(this.elR.nativeElement, 'width', `${this.totalWidth}px`);
		}
	}

}
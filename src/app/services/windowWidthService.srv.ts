import { Injectable } from '@angular/core';

@Injectable()
export class windowWidthService{

	outerWidthOutput(){
		return window.innerWidth;
	}

	innerWidthOutput(){
		return window.outerWidth;
	}

}
import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'vrumm-footer',
	templateUrl: 'footer.tmp.html'
})

export class VrummFooter{
	@Input() reiterativeRegistration: boolean = false;
}
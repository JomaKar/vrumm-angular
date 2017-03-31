import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/userService.srv';

@Component({
	moduleId: module.id,
	selector: 'user-profile',
	templateUrl: 'perfil.tmp.html',
	styleUrls: []
})

export class UserProfile{
	constructor(private aRoute: ActivatedRoute, private usrS: UserService){
		aRoute.params.subscribe((param:any) => {
			usrS.actualUsrAlias = param['alias'];
		});
	}
}
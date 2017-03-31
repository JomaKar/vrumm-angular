import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService{
	actualUsrInfo: Object = {};
	loggedUsrId: string = '';
	actualUsrAlias: string = '';
	loggedUsrInfo: Object = {};
	actualUserId: string = '';
	isLoggedUser: boolean = false;

	passingLoggedUserInfo(userInfo: Object){
		this.loggedUsrInfo = userInfo;
	}

	passingActualUserInfo(info: Object){
		this.actualUsrInfo = info;
	}

	setLoggedUserID(id){
		this.loggedUsrId = id;
	}

	loggedUser(val: boolean){
		this.isLoggedUser = val;
	}
}
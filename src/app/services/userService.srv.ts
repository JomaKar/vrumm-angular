import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService{
	userInfoStored = new EventEmitter();
	userID = new EventEmitter();
	loggedUserVal = new Subject<boolean>();

	loggedUserVal$ = this.loggedUserVal.asObservable();

	passingInfo(userInfo: Object){
		console.log(userInfo);
		this.userInfoStored.emit(userInfo);
	}

	passingID(id){
		this.userID.emit(id);
	}

	loggedUser(val: boolean){
		this.loggedUserVal.next(val);
	}
}
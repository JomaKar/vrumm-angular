import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UUID } from 'angular2-uuid';
import {Device} from 'ng2-device-detector';

@Injectable()
export class HttpService{
	private urlBase: string = 'https://vrummapp.net/ws/v2/';
	private endOfURL: string;
	deviceId: string;
	deviceRegOk: boolean = false;

	constructor(private http: Http, private device: Device){}

	registerDevice(){
		let uuid = UUID.UUID(),
		type = 'web',
		os = this.device.os_version;
		this.endOfURL = this.urlBase + 'acceso/getdevice';
		let dataToSend = {'device': uuid, type: type, os: os, serie: uuid};

		// console.log(this.dataToSend);

		let dataOnSending = JSON.stringify(dataToSend);

		this.http.post(this.endOfURL, dataOnSending).subscribe(res => {
			if(res.ok){
				let result = res.json();
				this.deviceId = result.mensaje.rs[0].id;
				console.log(result);
				this.deviceRegOk = true;
			}else{
				this.deviceRegOk = false;
				this.deviceId = '1';
			}
		});
	}

	login(data: Object){
		let endOfURL = this.urlBase + 'usuario/login';
		data['device'] = this.deviceId;
		// console.log(data);
		return this.sender(endOfURL, data);
	}

	userGetInfo(id: string){
		let url = this.urlBase + 'usuario/info';
		let data: Object = {idUsr: id};
		return this.sender(url, data);
	}

	private sender(url, data){
		let dataToSend = JSON.stringify(data);
		return this.http.post(url, dataToSend);
	}

}
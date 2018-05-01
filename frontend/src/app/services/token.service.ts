import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

	constructor() { }

	private iss ={
		login: "http://localhost:8000/api/login",
		signup: "http://localhost:8000/api/signup",
	}

	handle(token){
		this.set(token);
		console.log(this.isValid());
	}

	set(token){
		localStorage.setItem('token',token);
	}

	get(){
		return localStorage.getItem('token');
	}

	remove(){
		localStorage.removeItem('token');
	}

	isValid(){
		const token = this.get();
		if (token) {
			const payLoad =this.payLoad(token);
			if(payLoad){
				return Object.values(this.iss).indexOf(payLoad.iss) > -1 ? true : false;
			}
		}

		return false;
	}

	payLoad(token){
		const payLoad = token.split('.')[1];
		return this.decode(payLoad);
	}

	decode(payLoad){
		return JSON.parse(atob(payLoad));
	}

	loggedIn(){
		return this.isValid();
	}



}

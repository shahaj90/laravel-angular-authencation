import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private http: HttpClient) { }

	ngOnInit() {
	}

	error = null;

	public form ={
		email:null,
		password:null
	}

	onSubmit(){
		return this.http.post('http://localhost:8000/api/login',this.form).subscribe(
			data => console.log(data),
			error => this.handleError(error)
			)

	}

	handleError(error){
		return this.error = error.error.error;
	}

	

}

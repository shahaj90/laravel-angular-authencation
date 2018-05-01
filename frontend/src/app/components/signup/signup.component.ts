import { Component, OnInit } from '@angular/core';
import { JarwisService} from '../../services/jarwis.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	constructor(private Jarwis:JarwisService) { }

	ngOnInit() {
	}

	error = [];

	public form ={
		email: null,
		name: null,
		password:null,
		password_confirmation: null
	};

	onSubmit(){
		this.Jarwis.signup(this.form).subscribe(
			data => console.log(data),
			error => this.handleError(error)
			)

	}

	handleError(error){
		return this.error = error.error.errors;
	}




}

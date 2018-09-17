import { Component } from "@angular/core";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import { 
	TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";

export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
	  const isSubmitted = form && form.submitted;
	  return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
	}
  }

@Component({
	selector: "mga-RFQHeaderCM",
    providers: [...magicProviders],
	styleUrls: ["./RFQHeaderCM.component.css"],
	templateUrl: "./RFQHeaderCM.component.html"
})
export class RFQHeaderCM extends TaskBaseMagicComponent {}

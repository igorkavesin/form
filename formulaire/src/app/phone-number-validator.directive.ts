import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPhoneNumberValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PhoneNumberValidatorDirective,
    multi: true
  }]
})
export class PhoneNumberValidatorDirective implements Validator{

  validate(control: AbstractControl) : {[key: string]: any} | null {
    if( control.value && control.value.length != 10 ) {
      return { 'phoneNumberInvalid' :true };
    } else {
      return null;
    }
  }
  constructor() { }

}

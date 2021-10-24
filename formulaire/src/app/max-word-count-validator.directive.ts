import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appMaxWordCountValidator]',
  inputs: ['rawCount: appMaxWordCountValidator'],
    providers:[{
      provide:NG_VALIDATORS,
      useExisting: MaxWordCountValidatorDirective,
      multi: true
    }]
})
export class MaxWordCountValidatorDirective implements Validator {

  rawCount: string = '';

  validate(c: FormControl) : { [key: string] :any } | null {

     if (c.value && c.value.length != this.rawCount) {

      return { 'words': true };
    }
    return null;
  }
  get max(): number {
    return parseInt(this.rawCount );
  }
  constructor() { }

}

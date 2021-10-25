import { AbstractControl, FormControl, ValidationErrors, Validator } from '@angular/forms';

export class DelayValidator implements Validator {
   validate(control: AbstractControl): ValidationErrors | null {
     throw new Error('Method not implemented.');
   }



   static validate (c:AbstractControl): Promise<{[key: string]: any} | null>{

    if(c.pristine && !c.value) { console.log(c.pristine); }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(reject);

      }, 1000);
    });

  }
}

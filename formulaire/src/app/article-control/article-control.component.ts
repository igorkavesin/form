import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,  NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-article-control',
  templateUrl: './article-control.component.html',
  styleUrls: ['./article-control.component.scss']
})
export class ArticleControlComponent implements OnInit {

  articleBody:string = "";

  // bodyControl: FormControl = new FormControl(
  //   null,
  //   [Validators.required, this.wordCtValidator ]
  //   );

  bodyControl : FormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }


 ValidatePhone(control: AbstractControl): {[key: string]: any} | null  {
  if (control.value && control.value.length != 10) {
    return { 'phoneNumberInvalid': true };
  }
  return null;
}


  wordCtValidator(c:FormControl):{[key: string]: any} | null {
    //let wordCt: number = (c.value.match(/\S+/g) || [] ).length;
    if (c.value && c.value.length != 10) {
      return { 'val': true };
    }
    return null;

  }
  saveArticle() {
      if(this.bodyControl.valid) {
        alert("ok");
      }
  }


}

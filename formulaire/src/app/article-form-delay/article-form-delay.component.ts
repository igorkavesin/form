import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DelayValidator } from '../delay.validator';

@Component({
  selector: 'app-article-form-delay',
  templateUrl: './article-form-delay.component.html',
  styleUrls: ['./article-form-delay.component.scss']
})
export class ArticleFormDelayComponent implements OnInit {

  body: string = '';
  bodyControl: FormControl = new FormControl(null, null, DelayValidator.validate);
  seveArticle() {

    if(this.bodyControl.valid) {
      alert("ok");
    } else {
      alert("non");
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

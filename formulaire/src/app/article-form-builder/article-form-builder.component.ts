import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-form-builder',
  templateUrl: './article-form-builder.component.html',
  styleUrls: ['./article-form-builder.component.scss']
})
export class ArticleFormBuilderComponent implements OnInit {

  title:FormControl = new FormControl(null, Validators.required);
  articleGroup:FormGroup;

  constructor(@Inject(FormBuilder) formBuilder:FormBuilder) {
    this.articleGroup = formBuilder.group({
      article: formBuilder.group({
        title: [null, Validators.required],
        text: [null, new FormControl(null, Validators.required)]
      })

    });
   }

  ngOnInit(): void {
  }

  saveArticle() : void {
    console.log(this.articleGroup.valid);
    console.log(this.articleGroup.controls.article.value.text);
  }

}

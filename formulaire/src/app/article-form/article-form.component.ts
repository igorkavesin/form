import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  constructor() { }
  saveArticle(f:NgForm): void {
    console.log(f.form.controls.title.value );
  }

  ngOnInit(): void {
  }

}

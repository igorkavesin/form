import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms'

@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.scss']
})
export class ArticleEditorComponent implements OnInit {


  tagControles:Array<FormControl> = [];

  tagFormArray:FormArray = new FormArray(this.tagControles);

  title: string = "";
  //titleControl: FormControl = new FormControl();

  titleControl: FormControl = new FormControl(null, Validators.required);
  textControl: FormControl = new FormControl(null, Validators.required);

public article: {title:string, text:string} = {
    title: '',
    text: ''
  };
  articleControlGroup:FormGroup = new FormGroup({
    title: this.titleControl,
    text: this.textControl
  });

  constructor() {
  }

  addTag():void{
    this.tagFormArray.push(new FormControl(null, Validators.required))
  }
  saveArticleTag(): void {

    console.log(this.tagFormArray.value);
    for(let i in this.tagFormArray.value) {
      alert(this.tagFormArray.value[i]);
    }
  }
  removeTag(ind:number): void {

    this.tagFormArray.removeAt(ind)
  }

  saveArticle(): void {
    if(this.articleControlGroup.valid) {
        alert("ok");
        console.log(this.articleControlGroup.controls.title.value);
    }
    this.article.title= this.articleControlGroup.value.title;
  }
  submitTitle(): void{
    if(this.titleControl.valid) {
      this.title = this.titleControl.value;
    } else {
      this.title = "error";
    }
  }

  ngOnInit(): void {
  }

}

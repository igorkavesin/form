import { ArticleFormDelayComponent } from './article-form-delay/article-form-delay.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleControlComponent } from './article-control/article-control.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { ArticleFormBuilderComponent } from './article-form-builder/article-form-builder.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  {path:"first", component:ArticleEditorComponent},
  {path:"second", component:ArticleFormComponent},
  {path:"third", component:ArticleFormBuilderComponent},
  {path:"fourth", component: ArticleControlComponent},
  {path: "fifth", component:ArticleFormDelayComponent},
  {path: "display", component:DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

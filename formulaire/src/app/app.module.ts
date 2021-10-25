import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleFormBuilderComponent } from './article-form-builder/article-form-builder.component';
import {MatButtonModule} from '@angular/material/button';
import { ArticleControlComponent } from './article-control/article-control.component';
import { PhoneNumberValidatorDirective } from './phone-number-validator.directive';
import { MaxWordCountValidatorDirective } from './max-word-count-validator.directive';
import { ArticleFormDelayComponent } from './article-form-delay/article-form-delay.component';
@NgModule({
  declarations: [
    AppComponent,
    ArticleEditorComponent,
    ArticleFormComponent,
    ArticleFormBuilderComponent,
    ArticleControlComponent,
    PhoneNumberValidatorDirective,
    MaxWordCountValidatorDirective,
    ArticleFormDelayComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

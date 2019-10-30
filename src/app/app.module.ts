import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeTaskComponent } from './pipe-task/pipe-task.component';
import { InputPipe } from './input.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PipeTaskComponent,
    InputPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

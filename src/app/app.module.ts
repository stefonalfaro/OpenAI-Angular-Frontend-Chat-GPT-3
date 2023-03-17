import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelsComponent } from './models/models.component';
import { ChatCompletionsComponent } from './chat-completions/chat-completions.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelsComponent,
    ChatCompletionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

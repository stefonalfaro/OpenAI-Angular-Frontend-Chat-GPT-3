import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelsComponent } from './models/models.component';
import { ChatCompletionsComponent } from './chat-completions/chat-completions.component';
import { CustomChatComponent } from './custom-chat/custom-chat.component';

const routes: Routes = [
  { path: 'models', component: ModelsComponent },
  { path: 'chat', component: ChatCompletionsComponent },
  { path: 'custom-chat', component: CustomChatComponent },
  { path: '', redirectTo: '/models', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

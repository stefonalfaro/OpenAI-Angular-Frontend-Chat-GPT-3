import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SharedService } from '../shared.service';

interface Message {
  role: string;
  content: string;
}

interface ChatRequest {
  model: string;
  messages: Message[];
}

@Component({
  selector: 'app-chat-completions',
  templateUrl: './chat-completions.component.html',
  styleUrls: ['./chat-completions.component.css']
})
export class ChatCompletionsComponent implements OnInit {
  chatResponse: any;
  apiBaseUrl = environment.OpenAIAPIUrl;
  bearerToken = environment.OpenAIAPIKey;

  selectedModelId: string | null = null;
  
  constructor(private http: HttpClient, private sharedService: SharedService) 
  {
    this.sharedService.selectedModelId$.subscribe((id) => {
      this.selectedModelId = id;
      // Do something with the selectedModelId, e.g., make an API call or update the UI
      this.fetchChatCompletion(id);
    });
  }

  ngOnInit(): void {
    //this.fetchChatCompletion();
  }

  fetchChatCompletion(id:any): void {
    const chatRequest: ChatRequest = {
      model: id,
      messages: [
        {
          role: 'user',
          content: 'Can you analyze C# code?'
        }
      ]
    };
  
    const headers = {
      'Authorization': `Bearer ${this.bearerToken}`
    };
  
    this.http.post(`${this.apiBaseUrl}/chat/completions`, chatRequest, { headers }).subscribe(response => {
      this.chatResponse = response;
    }, error => {
      console.error('Failed to fetch chat completion:', error);
    });
  }
  
}

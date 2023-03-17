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
  selector: 'app-custom-chat',
  templateUrl: './custom-chat.component.html',
  styleUrls: ['./custom-chat.component.css'],
})
export class CustomChatComponent implements OnInit {
  chatResponse: any;
  apiBaseUrl = environment.OpenAIAPIUrl;
  bearerToken = environment.OpenAIAPIKey;
  message = '';
  selectedModelId: string | null = null;
  
  constructor(private http: HttpClient, private sharedService: SharedService) 
  {
    this.sharedService.selectedModelId$.subscribe((id) => {
      this.selectedModelId = id;
    });

    if (this.selectedModelId == null){
      this.selectedModelId = 'gpt-3.5-turbo'
    }
  }

  ngOnInit(): void {

  }

  submitMessage(): void 
  {
    if (this.message.trim()) 
    {
      const chatRequest = {
        model: this.selectedModelId,
        messages: [{ role: 'user', content: this.message }],
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
}

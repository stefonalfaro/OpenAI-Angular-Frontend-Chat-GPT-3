import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SharedService } from '../shared.service';

interface DataItem {
  id: string;
  object: string;
  created: number;
  owned_by: string;
  permission: Permission[];
  root: string;
  parent: any;
}

interface Permission {
  id: string;
  object: string;
  created: number;
  allow_create_engine: boolean;
  allow_sampling: boolean;
  allow_logprobs: boolean;
  allow_search_indices: boolean;
  allow_view: boolean;
  allow_fine_tuning: boolean;
  organization: string;
  group: any;
  is_blocking: boolean;
}

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  models: DataItem[] = [];
  apiBaseUrl = environment.OpenAIAPIUrl;
  bearerToken = environment.OpenAIAPIKey;
  
  constructor(private http: HttpClient, private sharedService: SharedService) {
   }

  ngOnInit(): void {
    this.fetchModels();
  }

  fetchModels(): void {
    const headers = {
      'Authorization': `Bearer ${this.bearerToken}`
    };
  
    this.http.get<ApiResponse>(`${this.apiBaseUrl}/models`, { headers }).subscribe(response => {
      this.models = response.data;
    }, error => {
      console.error('Failed to fetch models:', error);
    });
  }

  onRowClicked(modelId: string) {
    this.sharedService.setSelectedModelId(modelId);
  }
}

interface ApiResponse {
  object: string;
  data: DataItem[];
}

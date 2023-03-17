import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedModelId: string | null = null;
  title = 'openai-frontend';

  constructor(private sharedService: SharedService) {
    this.sharedService.selectedModelId$.subscribe((id) => {
      this.selectedModelId = id;
    });
  }
}

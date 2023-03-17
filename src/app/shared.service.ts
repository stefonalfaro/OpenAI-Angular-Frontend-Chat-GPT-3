import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private selectedModelId = new BehaviorSubject<string | null>(null);
  selectedModelId$ = this.selectedModelId.asObservable();

  constructor() {}

  setSelectedModelId(id: string) {
    this.selectedModelId.next(id);
  }
}

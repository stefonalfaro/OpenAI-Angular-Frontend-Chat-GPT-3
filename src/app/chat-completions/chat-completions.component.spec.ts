import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCompletionsComponent } from './chat-completions.component';

describe('ChatCompletionsComponent', () => {
  let component: ChatCompletionsComponent;
  let fixture: ComponentFixture<ChatCompletionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatCompletionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatCompletionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

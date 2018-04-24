import { TestBed, inject } from '@angular/core/testing';

import { StoryboardService } from './storyboard.service';

describe('StoryboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoryboardService]
    });
  });

  it('should be created', inject([StoryboardService], (service: StoryboardService) => {
    expect(service).toBeTruthy();
  }));
});

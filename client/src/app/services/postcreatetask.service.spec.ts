import { TestBed, inject } from '@angular/core/testing';

import { PostcreatetaskService } from './postcreatetask.service';

describe('PostcreatetaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostcreatetaskService]
    });
  });

  it('should be created', inject([PostcreatetaskService], (service: PostcreatetaskService) => {
    expect(service).toBeTruthy();
  }));
});

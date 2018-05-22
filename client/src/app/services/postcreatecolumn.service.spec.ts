import { TestBed, inject } from '@angular/core/testing';

import { PostcreatecolumnService } from './postcreatecolumn.service';

describe('PostcreatecolumnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostcreatecolumnService]
    });
  });

  it('should be created', inject([PostcreatecolumnService], (service: PostcreatecolumnService) => {
    expect(service).toBeTruthy();
  }));
});

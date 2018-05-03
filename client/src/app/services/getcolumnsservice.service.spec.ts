import { TestBed, inject } from '@angular/core/testing';

import { GetcolumnsserviceService } from './getcolumnsservice.service';

describe('GetcolumnsserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetcolumnsserviceService]
    });
  });

  it('should be created', inject([GetcolumnsserviceService], (service: GetcolumnsserviceService) => {
    expect(service).toBeTruthy();
  }));
});

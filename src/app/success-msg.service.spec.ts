import { TestBed, inject } from '@angular/core/testing';

import { SuccessMsgService } from './success-msg.service';

describe('SuccessMsgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuccessMsgService]
    });
  });

  it('should be created', inject([SuccessMsgService], (service: SuccessMsgService) => {
    expect(service).toBeTruthy();
  }));
});

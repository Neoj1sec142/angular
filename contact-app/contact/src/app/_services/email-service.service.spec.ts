/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmailServiceService } from './email-service.service';

describe('Service: EmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailServiceService]
    });
  });

  it('should ...', inject([EmailServiceService], (service: EmailServiceService) => {
    expect(service).toBeTruthy();
  }));
});

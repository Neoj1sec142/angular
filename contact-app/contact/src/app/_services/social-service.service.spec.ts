/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SocialServiceService } from './social-service.service';

describe('Service: SocialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialServiceService]
    });
  });

  it('should ...', inject([SocialServiceService], (service: SocialServiceService) => {
    expect(service).toBeTruthy();
  }));
});

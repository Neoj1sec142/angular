/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokemonServiceService } from './pokemon-service.service';

describe('Service: PokemonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonServiceService]
    });
  });

  it('should ...', inject([PokemonServiceService], (service: PokemonServiceService) => {
    expect(service).toBeTruthy();
  }));
});

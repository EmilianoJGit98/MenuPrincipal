import { TestBed } from '@angular/core/testing';

import { ActividadesAtodacostaService } from './actividades-atodacosta.service';

describe('ActividadesAtodacostaService', () => {
  let service: ActividadesAtodacostaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActividadesAtodacostaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

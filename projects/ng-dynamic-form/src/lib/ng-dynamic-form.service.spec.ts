import { TestBed } from '@angular/core/testing';

import { NgDynamicFormService } from './ng-dynamic-form.service';

describe('NgDynamicFormService', () => {
  let service: NgDynamicFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDynamicFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

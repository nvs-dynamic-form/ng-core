import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDynoform } from './ng-dynoform.component';

describe('NgDynoform', () => {
  let component: NgDynoform;
  let fixture: ComponentFixture<NgDynoform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgDynoform],
    }).compileComponents();

    fixture = TestBed.createComponent(NgDynoform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

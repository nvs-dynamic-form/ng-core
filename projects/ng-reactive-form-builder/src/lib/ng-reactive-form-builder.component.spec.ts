import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgReactiveFormBuilder } from './ng-reactive-form-builder.component';

describe('NgReactiveFormBuilder', () => {
  let component: NgReactiveFormBuilder;
  let fixture: ComponentFixture<NgReactiveFormBuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgReactiveFormBuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(NgReactiveFormBuilder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

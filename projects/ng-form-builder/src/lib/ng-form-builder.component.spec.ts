import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormBuilderComponent } from './ng-form-builder.component';

describe('NgFormBuilderComponent', () => {
  let component: NgFormBuilderComponent;
  let fixture: ComponentFixture<NgFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgFormBuilderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

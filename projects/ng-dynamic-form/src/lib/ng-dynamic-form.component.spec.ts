import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDynamicFormComponent } from './ng-dynamic-form.component';

describe('NgDynamicFormComponent', () => {
  let component: NgDynamicFormComponent;
  let fixture: ComponentFixture<NgDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgDynamicFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

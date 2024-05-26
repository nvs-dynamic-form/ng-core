import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvsDynamicFormComponent } from './nvs-dynamic-form.component';

describe('NvsDynamicForm', () => {
  let component: NvsDynamicFormComponent;
  let fixture: ComponentFixture<NvsDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NvsDynamicFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NvsDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

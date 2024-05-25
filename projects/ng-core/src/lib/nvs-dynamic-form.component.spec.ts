import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NvsDynamicForm } from './nvs-dynamic-form.component';

describe('NvsDynamicForm', () => {
  let component: NvsDynamicForm;
  let fixture: ComponentFixture<NvsDynamicForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NvsDynamicForm],
    }).compileComponents();

    fixture = TestBed.createComponent(NvsDynamicForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

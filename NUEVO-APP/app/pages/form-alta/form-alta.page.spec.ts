import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAltaPage } from './form-alta.page';

describe('FormAltaPage', () => {
  let component: FormAltaPage;
  let fixture: ComponentFixture<FormAltaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormAltaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuplierComponent } from './suplier.component';

describe('SuplierComponent', () => {
  let component: SuplierComponent;
  let fixture: ComponentFixture<SuplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

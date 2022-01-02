import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotisarComponent } from './cotisar.component';

describe('CotisarComponent', () => {
  let component: CotisarComponent;
  let fixture: ComponentFixture<CotisarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotisarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

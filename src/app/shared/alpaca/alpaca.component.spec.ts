import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlpacaComponent } from './alpaca.component';

describe('AlpacaComponent', () => {
  let component: AlpacaComponent;
  let fixture: ComponentFixture<AlpacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlpacaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlpacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

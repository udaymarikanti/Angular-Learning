import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmorCartComponent } from './custmor-cart.component';

describe('CustmorCartComponent', () => {
  let component: CustmorCartComponent;
  let fixture: ComponentFixture<CustmorCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustmorCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustmorCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

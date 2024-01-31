import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetagerieProductsComponent } from './cetagerie-products.component';

describe('CetagerieProductsComponent', () => {
  let component: CetagerieProductsComponent;
  let fixture: ComponentFixture<CetagerieProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CetagerieProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CetagerieProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

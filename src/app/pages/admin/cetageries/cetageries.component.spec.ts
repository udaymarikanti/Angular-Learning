import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CetageriesComponent } from './cetageries.component';

describe('CetageriesComponent', () => {
  let component: CetageriesComponent;
  let fixture: ComponentFixture<CetageriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CetageriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CetageriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

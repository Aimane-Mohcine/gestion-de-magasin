import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchteurComponent } from './achteur.component';

describe('AchteurComponent', () => {
  let component: AchteurComponent;
  let fixture: ComponentFixture<AchteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AchteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AchteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

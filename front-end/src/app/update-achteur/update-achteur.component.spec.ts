import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAchteurComponent } from './update-achteur.component';

describe('UpdateAchteurComponent', () => {
  let component: UpdateAchteurComponent;
  let fixture: ComponentFixture<UpdateAchteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAchteurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAchteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

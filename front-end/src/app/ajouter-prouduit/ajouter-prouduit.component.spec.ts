import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterProuduitComponent } from './ajouter-prouduit.component';

describe('AjouterProuduitComponent', () => {
  let component: AjouterProuduitComponent;
  let fixture: ComponentFixture<AjouterProuduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterProuduitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterProuduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

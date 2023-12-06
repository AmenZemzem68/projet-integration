import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaladePersoComponent } from './balade-perso.component';

describe('BaladePersoComponent', () => {
  let component: BaladePersoComponent;
  let fixture: ComponentFixture<BaladePersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaladePersoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaladePersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

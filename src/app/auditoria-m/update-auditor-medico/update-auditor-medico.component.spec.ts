import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAuditorMedicoComponent } from './update-auditor-medico.component';

describe('UpdateAuditorMedicoComponent', () => {
  let component: UpdateAuditorMedicoComponent;
  let fixture: ComponentFixture<UpdateAuditorMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAuditorMedicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAuditorMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

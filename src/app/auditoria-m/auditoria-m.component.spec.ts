import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaMComponent } from './auditoria-m.component';

describe('AuditoriaMComponent', () => {
  let component: AuditoriaMComponent;
  let fixture: ComponentFixture<AuditoriaMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditoriaMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditoriaMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

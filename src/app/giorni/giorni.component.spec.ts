import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiorniComponent } from './giorni.component';

describe('GiorniComponent', () => {
  let component: GiorniComponent;
  let fixture: ComponentFixture<GiorniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiorniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiorniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

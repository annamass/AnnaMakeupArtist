import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotografieComponent } from './fotografie.component';

describe('FotografieComponent', () => {
  let component: FotografieComponent;
  let fixture: ComponentFixture<FotografieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotografieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotografieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

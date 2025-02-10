import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aptitudes2Component } from './aptitudes2.component';

describe('Aptitudes2Component', () => {
  let component: Aptitudes2Component;
  let fixture: ComponentFixture<Aptitudes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aptitudes2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aptitudes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

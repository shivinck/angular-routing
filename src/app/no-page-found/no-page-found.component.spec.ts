import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPageFoundComponent } from './no-page-found.component';

describe('NoPageFoundComponent', () => {
  let component: NoPageFoundComponent;
  let fixture: ComponentFixture<NoPageFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoPageFoundComponent]
    });
    fixture = TestBed.createComponent(NoPageFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

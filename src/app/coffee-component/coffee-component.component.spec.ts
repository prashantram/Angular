import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeComponentComponent } from './coffee-component.component';

describe('CoffeeComponentComponent', () => {
  let component: CoffeeComponentComponent;
  let fixture: ComponentFixture<CoffeeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

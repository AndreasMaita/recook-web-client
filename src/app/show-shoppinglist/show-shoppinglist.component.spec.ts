import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShoppinglistComponent } from './show-shoppinglist.component';

describe('ShowShoppinglistComponent', () => {
  let component: ShowShoppinglistComponent;
  let fixture: ComponentFixture<ShowShoppinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowShoppinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowShoppinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackSizeComponent } from './add-pack-size.component';

describe('AddPackSizeComponent', () => {
  let component: AddPackSizeComponent;
  let fixture: ComponentFixture<AddPackSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPackSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPackSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

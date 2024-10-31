import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSujetComponent } from './list-sujet.component';

describe('ListSujetComponent', () => {
  let component: ListSujetComponent;
  let fixture: ComponentFixture<ListSujetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSujetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSujetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

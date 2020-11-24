import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentDecksContainerComponent } from './recent-decks-container.component';

describe('RecentDecksContainerComponent', () => {
  let component: RecentDecksContainerComponent;
  let fixture: ComponentFixture<RecentDecksContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentDecksContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentDecksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

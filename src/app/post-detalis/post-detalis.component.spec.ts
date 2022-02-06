import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetalisComponent } from './post-detalis.component';

describe('PostDetalisComponent', () => {
  let component: PostDetalisComponent;
  let fixture: ComponentFixture<PostDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDetalisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

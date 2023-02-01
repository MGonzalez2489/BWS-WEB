import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarArtistComponent } from './navbar-artist.component';

describe('NavbarArtistComponent', () => {
  let component: NavbarArtistComponent;
  let fixture: ComponentFixture<NavbarArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarArtistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaughtPokemonComponent } from './caught-pokemon.component';

describe('CaughtPokemonComponent', () => {
  let component: CaughtPokemonComponent;
  let fixture: ComponentFixture<CaughtPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaughtPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaughtPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

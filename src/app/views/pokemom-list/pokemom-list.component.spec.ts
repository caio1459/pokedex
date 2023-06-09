import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemomListComponent } from './pokemom-list.component';

describe('PokemomListComponent', () => {
  let component: PokemomListComponent;
  let fixture: ComponentFixture<PokemomListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemomListComponent]
    });
    fixture = TestBed.createComponent(PokemomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexCrudComponent } from './pokedex-crud.component';

describe('PokedexCrudComponent', () => {
  let component: PokedexCrudComponent;
  let fixture: ComponentFixture<PokedexCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDoContato } from './perfil-do-contato';

describe('PerfilDoContato', () => {
  let component: PerfilDoContato;
  let fixture: ComponentFixture<PerfilDoContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilDoContato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilDoContato);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

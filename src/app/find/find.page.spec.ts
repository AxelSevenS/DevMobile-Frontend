import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { FindPage } from './find.page';

describe('FindPage', () => {
  let component: FindPage;
  let fixture: ComponentFixture<FindPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

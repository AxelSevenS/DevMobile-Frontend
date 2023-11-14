import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MarkPage } from './mark.page';

describe('MarkPage', () => {
  let component: MarkPage;
  let fixture: ComponentFixture<MarkPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarkPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

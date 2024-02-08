import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScanPage } from './scan.page';

describe('FindPage', () => {
  let component: ScanPage;
  let fixture: ComponentFixture<ScanPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScanPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ColorCardComponent } from './color-card.component'

describe('ColorCardComponent', () => {
  let component: ColorCardComponent
  let fixture: ComponentFixture<ColorCardComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorCardComponent]
    })
    fixture = TestBed.createComponent(ColorCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render color code desc', () => {

  })

  it('should render color type desc', () => {
    
  })

  it('should render color square', () => {
    
  })
})

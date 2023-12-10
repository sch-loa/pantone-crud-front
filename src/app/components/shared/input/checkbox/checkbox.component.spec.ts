import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DECLARATIONS, IMPORTS } from 'src/app/app.module'
import { CheckboxComponent } from './checkbox.component'

describe('CheckboxComponent', () => {
  let component: CheckboxComponent
  let fixture: ComponentFixture<CheckboxComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxComponent, DECLARATIONS],
      imports: IMPORTS
    })
    fixture = TestBed.createComponent(CheckboxComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

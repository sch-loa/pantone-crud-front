import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DECLARATIONS, IMPORTS } from 'src/app/app.module'
import { CheckboxComponent } from './checkbox.component'

describe('CheckboxComponent', () => {
  let component: CheckboxComponentStub
  let fixture: ComponentFixture<CheckboxComponentStub>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxComponentStub, DECLARATIONS],
      imports: IMPORTS
    })

    fixture = TestBed.createComponent(CheckboxComponentStub)
    component = fixture.componentInstance
    component.dataTestId = "checkbox"
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should emit false state change initially', () => {
    expect(component.state).toBeFalsy()
    expect(component.eventEmitted).toBeFalsy()
  })

  it('should emit true state change', () => {
    const checkbox = searchElement('checkbox')
    checkbox.click()
    fixture.detectChanges()
    expect(component.state).toBeTruthy()
    expect(component.eventEmitted).toBeTruthy()
  })

  it('should emit false state change', () => {
    const checkbox = searchElement('checkbox')
    checkbox.click()
    fixture.detectChanges()
    checkbox.click()
    fixture.detectChanges()
    expect(component.state).toBeFalsy()
    expect(component.eventEmitted).toBeFalsy()
  })

  function searchElement(testId: string) {
    const compiled = fixture.debugElement.nativeElement
    return compiled.querySelector(`[data-testid="${testId}"]`)
  }

  class CheckboxComponentStub extends CheckboxComponent{
    eventEmitted!: boolean
    override emitChangedEvent(): void {
        this.eventEmitted = this.state
    }
  }
})

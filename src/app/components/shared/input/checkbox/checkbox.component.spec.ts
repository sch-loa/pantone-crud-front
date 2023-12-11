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
    component.type = 'hello'
    component.name = ''
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should emit true state change', () => {
    const checkbox = searchElement('checkbox__')
    checkbox.click()
    fixture.detectChanges()
    expect(component.type).toBeTruthy()
    expect(component.eventEmitted).toBeTruthy()
  })

  function searchElement(testId: string) {
    const compiled = fixture.debugElement.nativeElement
    return compiled.querySelector(`[data-testid="${testId}"]`)
  }

  class CheckboxComponentStub extends CheckboxComponent{
    eventEmitted!: string
    override emitChangedEvent(): void {
        this.eventEmitted = this.type
    }
  }
})

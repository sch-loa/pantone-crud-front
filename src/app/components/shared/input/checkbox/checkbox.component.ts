import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core'

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements AfterViewInit{
  @Input() dataTestId!: string
  @Input() state!: boolean
  @Output() changedEvent = new EventEmitter<boolean>()

  ngAfterViewInit() { setTimeout(() => this.emitChangedEvent()) }

  emitChangedEvent(){ this.changedEvent.emit(this.state) }
}

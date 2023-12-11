import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core'

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements AfterViewInit{
  @Input() type!: string
  @Input() name!: string
  @Output() changedEvent = new EventEmitter<string>()

  ngAfterViewInit() { this.emitChangedEvent() }

  emitChangedEvent(){ this.changedEvent.emit(this.type) }
}

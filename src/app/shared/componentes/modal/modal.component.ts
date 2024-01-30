import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input('title') title: string;

  @Input('content') content: string;

  @Input('message') message: string;

  @Input('textButton') textButton: string;

  @Output() eventChild: EventEmitter<string>= new EventEmitter<string>();
  

  @Input('functionChild') functionChild: ()=> void

  getEvent(){
      this.functionChild();
      this.eventChild.emit(this.message);
      this.closedModal()
  }

  public closedModal(){
     document.getElementById('closeModal').click()
  }

  constructor() { }

  ngOnInit(): void {
  }

}




import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }

  @Input()
  public type = "text";
  
  @Input() 
  inputModel: string;

  @Output() 
  inputModelChange = new EventEmitter<string>();

  @Input()
  public classType = "col-md-2";
  ngOnInit(): void {
  }

}

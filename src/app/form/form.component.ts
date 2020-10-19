import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public listCity=[
    {id:1,name:'Hà Nội'},
    {id:2,name:'Hưng Yên'},
    {id:3,name:'Hải Phòng'},
    {id:4,name:'TP.HCM'},
  ]
  onSubmit(value: any) {
    console.log(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

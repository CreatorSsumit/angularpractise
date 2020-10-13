import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import{EmployeService} from "../employe.service"

interface studentdata{id:string,name:string}

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
  encapsulation:ViewEncapsulation.None //or emulated mean show style in main component or child or all & none mean show style over all components
})
export class ThirdComponent implements OnInit {

  constructor(private employes:EmployeService){

  }
  

@ViewChild('sid',{static:true}) ids:ElementRef;
@ViewChild('sname',{static:true}) names:ElementRef;

student:Array<studentdata> = [];
  onsubmit():void{
    this.employes.onadd({id:"23",name:"sumit"})
  // console.log(this.ids.nativeElement.value,this.names.nativeElement.value)
  let temp = {
    id:this.ids.nativeElement.value,
    name:this.names.nativeElement.value
  }

  this.student.push(temp)
  
  }
  ngOnInit(){
    this.student = this.employes.Employe;
  }

  ondelete(id):void{
    const aa = this.student.filter(e=>e.id !=id )
    this.student = aa;
  }


}

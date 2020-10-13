import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  oddata : Array<number> = [1,3,5,7];
  evendata : Array<number> = [2,4,6,8];
  select: boolean = false;

change(){
  this.select=!this.select
}

value : number = 4;

}

import { Injectable } from '@angular/core';

interface employe{id:string,name:string}

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
 Employe:Array<employe> = []
  constructor() { 

  }
 onadd(add:employe){
   this.Employe.push(add)
 } 
}

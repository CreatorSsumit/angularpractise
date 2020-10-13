import { Component ,Input, EventEmitter, Output, ContentChild, ElementRef, OnChanges, OnInit, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

interface studentdata{id:string,name:string}

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  //implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy
  //lifecycle method --
  // constructor() { 
  //   console.log("show chala")
  // }

  // ngOnChanges(data:SimpleChanges){

  //    console.log('ngonchanged run',data)
  // }
  // ngOnInit(){
  //   console.log('content')    
  // }
 
  // ngDoCheck(){
  //   console.log('content',this.childdata.nativeElement.innerText)    
  // }
  // ngAfterContentInit(){
  //   console.log('ngAfterContentInit running')
  // }
  // ngAfterContentChecked(){
  //   console.log('ngAfterContentcheck running')    
    
  // }
  // ngAfterViewInit(){
  //   console.log('ngAfterViewinit running')    

  // }
  // ngAfterViewChecked(){
  //   console.log('ngAfterviewcheck running')    

  // }
  // ngOnDestroy(){
  //   console.log('ngondistroy run')    

  // }
//-- lifecycle method


 @Input('studentdetails') student:studentdata; //parent to child data transfer
 @Output() deletedata = new EventEmitter<any>(); //emit data from child to parent
@ContentChild('showdata',{static:true}) childdata:ElementRef; //data of parent in tag
 ondelete(id){
this.deletedata.emit(id)
  
 }

}

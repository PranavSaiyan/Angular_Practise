import { Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {map, filter} from 'rxjs/operators';
import 'rxjs/Rx';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
no:string;
countSub: Subscription;
  constructor() { }
  ngOnDestroy(){
    this.countSub.unsubscribe();
  }
  ngOnInit() {
    const myNumbers = Observable.interval(1000).map((data:number)=>{ return 1*data});
    this.countSub = myNumbers.pipe(filter((data: number)=>{
      return data > 0;
    }) ,map((data: number)=>{
    return 'Round : '+(data+1);
  })).subscribe((n:string)=>{
      this.no=n;
    })
  const myObservable = Observable.create((observe: Observer<string>)=>{
    setTimeout(()=>{
      observe.next('First Package');
    },2000);
    setTimeout(()=>{
      observe.complete();
    },5000);
    setTimeout(()=>{
      observe.next('Second package');
      //observe.error('Error In Package');
    },9000);
    
  });

  myObservable.subscribe(
    (data:string)=>{ console.log(data);},
    (error:string)=>{ console.log(error);},
    ()=>{ console.log('complete');},
    )
  }

}
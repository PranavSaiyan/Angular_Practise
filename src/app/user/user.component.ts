import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  constructor( private routeService: ActivatedRoute) { }

  ngOnInit() {
    this.routeService.params.subscribe((p: Params)=>{
        this.id = +p['id'];
    })
  }

}
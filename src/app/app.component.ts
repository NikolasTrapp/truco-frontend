import {Component, OnInit} from '@angular/core';
import {TrucoService} from './services/truco.service';
import {environment} from "../environments/environment";
import {Observable, Subject, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TrucoService]
})
export class AppComponent implements OnInit{

  constructor( private trucoService: TrucoService) {
    this.trucoService.createWebSocket().subscribe(
        (data) => console.log(data),
        (error) => console.log("deu pau", error)
    )
  }

  ngOnInit(): void {
    this.trucoService.sendMessage("oi");
  }

}

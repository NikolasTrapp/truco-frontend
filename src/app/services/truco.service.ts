import { Injectable } from '@angular/core';
import {webSocket, WebSocketSubject} from "rxjs/webSocket";
import {Observable, Observer, Subject} from "rxjs";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class TrucoService {

  ws: WebSocket;
  url = environment.url;

  constructor() { }


  public createWebSocket() : Observable<string>{
    this.ws = new WebSocket(this.url);
    return new Observable(observer => {
      this.ws.onmessage = (event) => observer.next(event.data);
      this.ws.onerror = (event) => observer.error(event);
      this.ws.onclose = (event) => observer.complete();
    });
  }

  public sendMessage (message: string) {
    this.ws.send(message);
  }

}

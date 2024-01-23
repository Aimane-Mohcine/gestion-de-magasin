import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  isVisible: boolean = false;
  notifications: any;
  static nbr: number = 0; // Propriété statique pour stocker la valeur entre les appels
nbrN: number=0;
  constructor(private http: HttpClient) { }

  getNotification() {
    this.http.get("http://localhost:9955/api/notifications").subscribe(
      {
        next: (value: any) => {
          this.notifications = value;

          if (NotificationService.nbr < this.notifications.length) {
            this.isVisible = true;
            this.nbrN = 1 ;
          } else {
            this.isVisible = false;
          }

          NotificationService.nbr = this.notifications.length;
        },
        error: err => {
          console.log(err);
        }
      }
    );
  }

  close() {
    this.isVisible = false;
    this.nbrN = 0;
  }
}

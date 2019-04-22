import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppareilService {
    private appareils = [];/*
        {
          id : 1,
          name:"Télévision",
          status:"éteint"
        },
        {
          id : 2,
          name:"Ordinateur",
          status:"éteint"
        },
        {
          id : 3,
          name:"Radio",
          status:"allumé"
        }
      ];*/

    appareilSubject = new Subject<any[]>();

    constructor(private httpClient : HttpClient) {}
  
    switchOnAll() {
        this.appareils.forEach(element => {
            element.status = "allumé";
        });
        this.emitAppareilSubject();
    }

    switchOffAll() {
        this.appareils.forEach(element => {
            element.status = "éteint";
        });
        this.emitAppareilSubject();
    }

    switchOn(i : number) {
        this.appareils[i].status = "allumé";
        this.emitAppareilSubject();
    }

    switchOff(i : number) {
        this.appareils[i].status = "éteint";
        this.emitAppareilSubject();
    }
  
    emitAppareilSubject() {
      return this.appareilSubject.next(this.appareils.slice());
    }
  
    getAppareilById(id : number) {
      const appareil = this.appareils.find(
        appareil => {
          return appareil.id == id
        }
      );
      return appareil;
    }
  
    addAppareil(name : string, status : string) {
      const appareilObject = {
        id : 0,
        name : '',
        status : ''
      };
      appareilObject.name = name;
      appareilObject.status = status;
      appareilObject.id = this.appareils[this.appareils.length - 1].id + 1;
      this.appareils.push(appareilObject);
      this.emitAppareilSubject();
    }
  
    saveAppareilToServer() {
      this.httpClient
      .put('https://open-classroom-angular.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log("Enregistrement terminé")
        },
        (error) => {
          console.log("Erreur de sauvegarde " + error);
        }
      );
    }
  
    getAppareilFromServer() {
      this.httpClient
      .get<any[]>('https://open-classroom-angular.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log("Erreur de chargement " + error);
        }
      )
    }
  }
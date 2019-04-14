import { Subject } from 'rxjs';

export class AppareilService {
    private appareils = [
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
      ];

    appareilSubject = new Subject<any[]>();

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
}
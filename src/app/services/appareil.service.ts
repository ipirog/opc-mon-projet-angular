export class AppareilService {
    appareils = [
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

    switchOnAll() {
        this.appareils.forEach(element => {
            element.status = "allumé";
        });
    }

    switchOffAll() {
        this.appareils.forEach(element => {
            element.status = "éteint";
        });
    }

    switchOn(i : number) {
        this.appareils[i].status = "allumé";
    }

    switchOff(i : number) {
        this.appareils[i].status = "éteint";
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
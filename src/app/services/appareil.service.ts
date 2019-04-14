export class AppareilService {
    appareils = [
        {
          name:"Télévision",
          status:"éteint"
        },
        {
          name:"Ordinateur",
          status:"éteint"
        },
        {
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
}
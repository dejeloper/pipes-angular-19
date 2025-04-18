import {Component, signal} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {interval, tap} from 'rxjs';

const client1 = {
  name: 'Jhonatan',
  age: 33,
  gender: 'male',
  address: 'Calle de la República, 123',
  city: 'Madrid',
  country: 'España',
};

const client2 = {
  name: 'Anny',
  age: 26,
  gender: 'female',
  address: 'Calle Martín Fierro, 456',
  city: 'Berlín',
  country: 'Alemania',
};

@Component({
  selector: 'uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe, KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  // i18nSelectPipe
  client = signal(client1);

  saludoMap = {
    male: 'un hombre',
    female: 'una mujer',
  }

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return
    }

    this.client.set(client1);
  }

  // i18nPluralPipe
  clientsMap = signal({
    "=0": 'No hay clientes esperando',
    "=1": 'Un cliente esperando',
    '=2': 'Tenemos 2 clientes esperando',
    other: 'Tenemos # clientes esperando',
  })

  clients = signal([
    'Maria',
    'Juan',
    'Carla',
    'Diego',
    'Fernando',
    'Jose',
    'Andrea',
    'Daniel',
    'Javier',
    'Luisa'
  ])


  deleteClient() {
    this.clients.update(prev => prev.slice(1));
  }

  // KeyValuePipe
  profile = {
    name: 'Jhonatan',
    age: 20,
    address: 'Berlin - Alemania',
  }

  // AsyncPipe
  promiseValue: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Datos en la promesa');
      console.log('Promesa finalizada');
    }, 3500);
  });


  myObservableTimer = interval(2000).pipe(
    tap((value) => {console.log(value)}),
  )


}

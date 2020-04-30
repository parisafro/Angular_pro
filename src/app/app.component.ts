import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  people: any[] = [    {      "name": "Douglas  Pace",      "age": 35    },    {      "name": "Mcleod  Mueller",      "age": 32    },    {      "name": "Day  Meyers",      "age": 21    },    {      "name": "Aguirre  Ellis",      "age": 34    },    {      "name": "Cook  Tyson",      "age": 32    }  ];


  PRODUCTS = [    {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},    {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},    {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},    {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
  ];

Movies: any[] = [    {      "name": "Avengers: Endgame"    },    {      "name": "Good Boys"    },    {      "name": "Playmobil: The Movie"    },    {      "name": "Aquarela"    },    {      "name": "Aladdin"    },     {      "name": "Downton Abbey"    }  ];

showActions: boolean = true;    contacts: any = [    {name: "test1", email:"test1@test1.com"},    {name: "test2", email:"test1@test2.com"},    {name: "test3", email:"test1@test3.com"},    {name: "test4", email:"test1@test4.com"}    ]
}



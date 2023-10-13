import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public router: Router,
  ) {}

  ngOnInit() {
  }
  questionList = [
    {
      questionId: 1,
      questionNo: '1',
      question: "In case you are buying an electric vehicle, Which one would you prefer",
      option: [
        { name: "Ola Electric Scooter", id: 1 },
        { name: "Tvs", id: 2 },
        { name: "Hore Electric optime", id: 3 },
        { name: "Bajaj Electric", id: 4 },
        { name: "Honda Electric", id: 5 },
        { name: "BMW Electric", id: 6 },
        { name: "Kiw Electric", id: 7 },
      ],
    },
    {
      questionId: 2,
      questionNo: '2',
      question: "What are the top ten electric vehicles in the World?",
      option: [
        { name: "Hyundai Ioniq Electric", id: 1 },
        { name: "Volkswagon e-Golf", id: 2 },
        { name: "Nissan Leaf", id: 3 },
        { name: "Tesla Model X", id: 4 },
        { name: "Jaguar I-pace", id: 5 },
      ],
    },
    {
      questionId: 3,
      questionNo: '3',
      question: "How many types of electric vehicles are there and name them?",
      option: [
        { name: "Battery Electric Vehicles (BEVs)", id: 1 },
        { name: "Hybrid Electric Vehicles (HEVs)", id: 2 },
        { name: "Plug-in Hybrid Electric Vehicles (PHEVs)", id: 3 },
        { name: "Fuel Cell Electric Vehicles (FCEVs)", id: 4 },
      ],
    },
  ];
  
  success
  step: number = 1;
  selectedOptionIds: {
     [questionId: number]: number 
     } = {};

  public onItemChange(questionGroup, option) {
    console.log(option)
    this.selectedOptionIds[questionGroup.questionId] = option.id;
  }

  public getSelectedOptionId(questionGroup) {
    return this.selectedOptionIds[questionGroup.questionId];
  }

  public incrementStep() {
    if (this.step < this.questionList.length) {
      this.step++;
    }
    else{
      this.router.navigate(["/success"]);

    }
  }

  public decrementStep() {
    if (this.step > 1) {
      this.step--;
    }
  
  }

 

}

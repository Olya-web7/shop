import { Component, OnInit } from '@angular/core';

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {  
  name!: string;
  isAvailable!: boolean;
  description!: string;
  price!: number; 
  direction = Direction.Down;

  constructor() { }

  ngOnInit(): void {
  }

}


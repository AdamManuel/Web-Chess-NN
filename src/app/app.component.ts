import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  public board: Peice[][];

  constructor() {
    let row1 = [new Peice(2), new Peice(3), new Peice(4), new Peice(6), new Peice(5), new Peice(4), new Peice(3), new Peice(2)];
    let row2 = [new Peice(1), new Peice(1), new Peice(1), new Peice(1), new Peice(1), new Peice(1), new Peice(1), new Peice(1)];
    let row7 = [new Peice(1), new Peice(1), new Peice(1), new Peice(1), new Peice(1), new Peice(1), new Peice(1), new Peice(1)];
    let row8 = [new Peice(2), new Peice(3), new Peice(4), new Peice(6), new Peice(5), new Peice(4), new Peice(3), new Peice(2)];
    let emptyRow = [new Peice(0), new Peice(0), new Peice(0), new Peice(0), new Peice(0), new Peice(0), new Peice(0), new Peice(0)];
    this.board = [
      row1,
      row2,
      emptyRow,
      emptyRow,
      emptyRow,
      emptyRow,
      row7,
      row8
    ];
  }

  title = 'NN Chess';

  getHeight() {
    return ((window.innerHeight - 16) / 8) + 'px';
  }

  onClick(coorX: number, coorY: number) {
    console.log(this.board[coorX][coorY].getName());
    console.log(coorX + ' ' + coorY);
  }
}

/**
 * type 0 = nothing
 * type 1 = pawn
 * type 2 = rook
 * type 3 = knight
 * type 4 = bishop
 * type 5 = queen
 * type 6 = king
 */
export class Peice {
  constructor(
    public type?: number
  ) {
    if (type) {
      type = 0;
    }
  }

  getName() {
    switch (this.type) {
      case 0:
        return 'empty';
      case 1:
        return 'pawn';
      case 2:
        return 'rook';
      case 3:
        return 'knight';
      case 4:
        return 'bishop';
      case 5:
        return 'queen';
      case 6:
        return 'king';
      default:
        return 'empty';
    }
  }
}

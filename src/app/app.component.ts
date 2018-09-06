import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  public board: Peice[][];

  public possibleMoves: any[];

  constructor() {
    let row1 = [new Peice(2, 1), new Peice(3, 1), new Peice(4, 1), new Peice(6, 1), new Peice(5, 1), new Peice(4, 1), new Peice(3, 1), new Peice(2, 1)];
    let row2 = [new Peice(1, 1), new Peice(1, 1), new Peice(1, 1), new Peice(1, 1), new Peice(1, 1), new Peice(1, 1), new Peice(1, 1), new Peice(1, 1)];
    let row7 = [new Peice(1, 2), new Peice(1, 2), new Peice(1, 2), new Peice(1, 2), new Peice(1, 2), new Peice(1, 2), new Peice(1, 2), new Peice(1, 2)];
    let row8 = [new Peice(2, 2), new Peice(3, 2), new Peice(4, 2), new Peice(6, 2), new Peice(5, 2), new Peice(4, 2), new Peice(3, 2), new Peice(2, 2)];
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
    console.log(this.board[coorX][coorY].getMoves(coorX, coorY));
    this.possibleMoves = this.board[coorX][coorY].getMoves(coorX, coorY);
    console.log(this.possibleMoves);
  }

  getHugh(coorX: number, coorY: number) {
    for (let index = 0; index < this.possibleMoves.length; index++) {
      const move = this.possibleMoves[index];
      if (move.coorX == coorX && move.coorY == coorY) {
        return 'rgba(0,255,0,.5)';
      }
    }
    return 'rgba(0,0,0,0)';
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
 * 
 * team 1 = white
 * team 2 = black
 */
export class Peice {
  constructor(
    public type?: number,
    public team?: number
  ) {
    if (!type) {
      type = 0;
    }
    if (!team) {
      team = 0;
    }
  }

  getName() {
    switch (this.type) {
      case 0:
        return '';
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

  getTeam() {
    if (this.team == 1) {
      return 'white';
    } else if (this.team == 2) {
      return 'black';
    } else {
      return 'none';
    }
  }

  getMoves(coorX: number, coorY: number) {
    switch (this.type) {
      case 0:
        return [];
      case 1:
        return this.getPawnMoves(coorX, coorY, this.team);
      case 2:
        return this.getRookMoves(coorX, coorY);
      case 3:
        return this.getKnightMoves(coorX, coorY)
      case 4:
        return this.getBishopMoves(coorX, coorY);
      case 5:
        return this.getQueenMoves(coorX, coorY);
      case 6:
        return this.getKingMoves(coorX, coorY, this.team);
      default:
        return [];
    }
  }

  getPawnMoves(coorX: number, coorY: number, team: number) {
    if (team == 1) {
      return [{coorX: (coorX + 1), coorY: coorY}];
    } else {
      return [{coorX: (coorX - 1), coorY: coorY}];
    }
  }

  getRookMoves(coorX: number, coorY: number) {

  }

  getKnightMoves(coorX: number, coorY: number) {

  }

  getBishopMoves(coorX: number, coorY: number) {

  }

  getQueenMoves(coorX: number, coorY: number) {

  }

  getKingMoves(coorX: number, coorY: number, team: number) {

  }
}

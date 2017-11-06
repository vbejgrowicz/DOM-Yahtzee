webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_dice_1_png__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_dice_1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_dice_1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_dice_2_png__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_dice_2_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_dice_2_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_dice_3_png__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_dice_3_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_dice_3_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_dice_4_png__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_dice_4_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_dice_4_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_dice_5_png__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_dice_5_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_dice_5_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_dice_6_png__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_dice_6_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_dice_6_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_Fives_png__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_Fives_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_Fives_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_LargeStraight_png__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_LargeStraight_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__assets_LargeStraight_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_Ones_Fullhouse_png__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_Ones_Fullhouse_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__assets_Ones_Fullhouse_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_Sixes_FourKind_png__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_Sixes_FourKind_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__assets_Sixes_FourKind_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assets_SmallStraight_png__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assets_SmallStraight_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__assets_SmallStraight_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_ThreeKind_png__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_ThreeKind_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__assets_ThreeKind_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_Twos_Fours_png__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_Twos_Fours_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__assets_Twos_Fours_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__assets_Yahtzee_png__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__assets_Yahtzee_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__assets_Yahtzee_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Game__ = __webpack_require__(16);


















const controller = (gameControls => {
  let availableScores;
  const roll = () => {
    gameControls.roll();
  };
  const newGame = () => {
    gameControls.start();
  };
  const rules = () => {
    document.querySelector('.rules').classList.toggle('open');
  };
  const selectScore = (type, category, value) => {
    gameControls.addScore(type, category, value);
  };
  const setupEventListeners = () => {
    document.querySelector('.roll-btn').addEventListener('click', roll);
    document.querySelector('.new-game-btn').addEventListener('click', newGame);
    document.querySelector('.seeRules').addEventListener('click', rules);
    document.querySelector('.close-btn').addEventListener('click', rules);

    document.querySelector('.scorecard').addEventListener('click', e => {
      const scorecard = e.target.offsetParent.className;
      const sectionID = e.target.parentElement.id;
      const category = e.target.className;
      if (scorecard.includes('active') && availableScores.includes(category) && !category.includes('scored')) {
        selectScore(sectionID, category);
      }
    });
    const diceArr = Array.from(document.querySelectorAll('.dice'));
    diceArr.forEach(die => {
      die.addEventListener('click', e => {
        const diceNum = e.target.id;
        gameControls.holdToggle(diceNum);
      });
    });
  };
  return {
    init() {
      newGame();
      setupEventListeners();
      availableScores = gameControls.DOMstrings();
    }
  };
})(__WEBPACK_IMPORTED_MODULE_15__Game__["a" /* default */]);

controller.init();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/dice-1.png";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/dice-2.png";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/dice-3.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/dice-4.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/dice-5.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/dice-6.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/Fives.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/LargeStraight.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/Ones_Fullhouse.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/Sixes_FourKind.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/SmallStraight.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/ThreeKind.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/Twos_Fours.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/Yahtzee.png";

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DisplayScores__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Score__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Turn__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DisplayTurn__ = __webpack_require__(21);





const Game = (() => {
  let gameScore;
  let calcScore;
  let totals;
  let rollData;
  let categories;
  let gameStatus;

  const initScores = () => {
    categories = Game.DOMstrings();
    gameStatus = 'new';
    gameScore = [];
    totals = {
      upperTotal: 0,
      upperBonus: 0,
      lowerTotal: 0,
      total: 0,
      highScore: localStorage.getItem('score') || 0
    };
  };
  const totalScores = addedScore => {
    totals[`${addedScore.type}Total`] += addedScore.value;
    if (totals.upperTotal > 62 && totals.upperBonus !== 35) {
      totals.upperBonus = 35;
      totals.total += totals.upperBonus;
    }
    totals.total += addedScore.value;
  };
  const initTurn = () => {
    rollData = __WEBPACK_IMPORTED_MODULE_2__Turn__["a" /* default */].init();
    __WEBPACK_IMPORTED_MODULE_3__DisplayTurn__["a" /* default */].init(rollData);
  };
  const checkYahtzee = () => {
    const diceArr = rollData.dice.map(die => die.value);
    const isUnique = [...new Set(diceArr)];
    if (isUnique.length === 1) {
      return true;
    }
    return false;
  };
  const yahtzeeScored = () => {
    const findYahtzee = el => Object.values(el).includes('yahtzee');
    if (gameScore.findIndex(findYahtzee) !== -1) {
      return true;
    }
    return false;
  };
  return {
    start() {
      initScores();
      initTurn();
      __WEBPACK_IMPORTED_MODULE_3__DisplayTurn__["a" /* default */].game(gameStatus);
      __WEBPACK_IMPORTED_MODULE_0__DisplayScores__["a" /* default */].updateScoreboard(gameStatus, totals);
    },
    addScore(type, category) {
      const newScore = new __WEBPACK_IMPORTED_MODULE_1__Score__["a" /* default */](type, category, rollData.dice);
      gameScore.push(newScore);
      totalScores(newScore);
      gameStatus = __WEBPACK_IMPORTED_MODULE_0__DisplayScores__["a" /* default */].addScore(newScore, totals, gameStatus);
      if (gameStatus === 'active') {
        initTurn();
      } else {
        __WEBPACK_IMPORTED_MODULE_3__DisplayTurn__["a" /* default */].game(gameStatus, totals);
      }
    },
    roll() {
      gameStatus = 'active';
      if (rollData.rollCount > 0) {
        __WEBPACK_IMPORTED_MODULE_0__DisplayScores__["a" /* default */].updateScoreboard(gameStatus, totals);
        rollData.rollCount -= 1;
        const roll = () => {
          rollData.dice = __WEBPACK_IMPORTED_MODULE_2__Turn__["a" /* default */].rollDice(rollData.dice);
          __WEBPACK_IMPORTED_MODULE_3__DisplayTurn__["a" /* default */].turnInfo(rollData);
        };
        const rollAnim = setInterval(roll, 50);
        setTimeout(() => {
          clearInterval(rollAnim);
          this.getScores();
        }, 600);
      }
    },
    holdToggle(diceNum) {
      rollData.dice[diceNum] = __WEBPACK_IMPORTED_MODULE_2__Turn__["a" /* default */].holdDice(rollData.dice[diceNum]);
      __WEBPACK_IMPORTED_MODULE_3__DisplayTurn__["a" /* default */].holdDice(diceNum);
    },
    getScores() {
      calcScore = [];
      const isYahtzee = checkYahtzee();
      const isScored = yahtzeeScored();
      if (isYahtzee && !isScored) {
        __WEBPACK_IMPORTED_MODULE_3__DisplayTurn__["a" /* default */].yahtzee('show', rollData.dice);
        setTimeout(() => {
          this.addScore('lower', 'yahtzee');
        }, 1000);
      } else {
        if (isYahtzee) {
          __WEBPACK_IMPORTED_MODULE_3__DisplayTurn__["a" /* default */].yahtzee('show', rollData.dice);
        }
        categories.forEach(category => {
          const newCalc = new __WEBPACK_IMPORTED_MODULE_1__Score__["a" /* default */](null, category, rollData.dice);
          calcScore.push(newCalc);
        });
        this.updateCalcScores();
      }
    },
    updateCalcScores() {
      __WEBPACK_IMPORTED_MODULE_0__DisplayScores__["a" /* default */].showCalc(calcScore);
    },
    DOMstrings() {
      return __WEBPACK_IMPORTED_MODULE_0__DisplayScores__["a" /* default */].getDOMstrings();
    }
  };
})();

/* harmony default export */ __webpack_exports__["a"] = (Game);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const DOMstrings = ['one', 'two', 'three', 'four', 'five', 'six', 'threekind', 'fourkind', 'fullhouse', 'smStraight', 'lgStraight', 'yahtzee', 'chance'];

const DisplayScores = {
  getDOMstrings() {
    return DOMstrings;
  },
  updateScoreboard(gameStatus, totals) {
    const arrScored = [];
    DOMstrings.forEach(key => {
      const DOMselector = document.querySelector(`.${key}`);
      if (gameStatus === 'new') {
        DOMselector.classList.remove('scored');
      }
      if (!DOMselector.classList.contains('scored')) {
        DOMselector.textContent = '';
        arrScored.push(false);
      }
    });
    this.updateTotals(totals);
    const status = this.checkWon(arrScored, totals);
    return status;
  },
  checkWon(arrScored, gameTotals) {
    let status = 'active';
    if (!arrScored.includes(false)) {
      status = 'winner';
      this.checkHighScore(gameTotals);
    }
    return status;
  },
  showCalc(scores) {
    scores.forEach(key => {
      const { category, value } = key;
      const DOMselector = document.querySelector(`.${category}`);
      if (!DOMselector.classList.contains('scored')) {
        DOMselector.textContent = value;
      }
    });
  },
  addScore(input, totals, status) {
    const { category, value } = input;
    const DOMselector = document.querySelector(`.${category}`);
    DOMselector.classList.add('scored');
    DOMselector.textContent = value;
    return this.updateScoreboard(status, totals);
  },
  updateTotals(totals) {
    Object.entries(totals).forEach(score => {
      const [category, value] = score;
      document.querySelector(`.${category}`).textContent = value;
    });
  },
  checkHighScore(totals) {
    if (totals.total > totals.highScore) {
      localStorage.setItem('score', totals.total);
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (DisplayScores);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Score {
  constructor(type, category, diceObj) {
    this.type = type;
    this.category = category;
    this.value = this.calculate(diceObj);
  }
  calculate(diceObj) {
    let score = 0;
    let numOf;
    const values = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6
    };
    const diceArr = diceObj.map(die => die.value).sort();
    const sumDice = diceArr.reduce((a, b) => a + b, 0);
    const isUnique = [...new Set(diceArr)];

    const count = curNum => diceArr.filter(die => die === curNum);

    const checkMultiple = limit => {
      isUnique.forEach(num => {
        numOf = count(num).length;
        if (numOf >= limit) {
          score = sumDice;
        }
      });
      return score;
    };

    const checkStraight = (sizeScore, arr) => {
      let val = 0;
      while (val < arr.length - 1) {
        if (arr[val + 1] - arr[val] === 1) {
          val += 1;
        } else {
          return 0;
        }
      }
      score = sizeScore;
      return score;
    };

    switch (this.category) {
      case 'threekind':
        if (isUnique.length <= 3) {
          score = checkMultiple(3);
        }
        return score;
      case 'fourkind':
        if (isUnique.length <= 2) {
          score = checkMultiple(4);
        }
        return score;
      case 'fullhouse':
        if (isUnique.length === 2) {
          numOf = count(isUnique[0]).length;
          if (numOf === 2 || numOf === 3) {
            score = 25;
          }
        }
        return score;
      case 'smStraight':
        if (isUnique.length === 4) {
          score = checkStraight(30, isUnique);
        } else if (isUnique.length === 5) {
          const firstfour = checkStraight(30, isUnique.slice(0, 4));
          const lastfour = checkStraight(30, isUnique.slice(1, 5));
          score = firstfour || lastfour;
        }
        return score;
      case 'lgStraight':
        if (isUnique.length === 5) {
          score = checkStraight(40, isUnique);
        }
        return score;
      case 'yahtzee':
        if (isUnique.length === 1) {
          score = 50;
        }
        return score;
      case 'chance':
        score = sumDice;
        return score;
      default:
        score = count(values[this.category]).length * values[this.category];
        return score;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Score;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Die__ = __webpack_require__(20);
/*
eslint no-param-reassign:
["error", { "props": true, "ignorePropertyModificationsFor": ["die"] }]
*/



const Turn = {
  init() {
    const dice = [];
    const numOfDie = 5;
    for (let i = 1; i <= numOfDie; i += 1) {
      dice.push(new __WEBPACK_IMPORTED_MODULE_0__Die__["a" /* default */]());
    }
    const rollCount = 3;
    return {
      dice,
      rollCount
    };
  },
  rollDice(dice) {
    const nextDice = [];
    dice.forEach((currentDie, idx) => {
      if (!currentDie.hold) {
        nextDice[idx] = new __WEBPACK_IMPORTED_MODULE_0__Die__["a" /* default */]();
      } else {
        nextDice[idx] = currentDie;
      }
    });
    return nextDice;
  },
  holdDice(die) {
    if (!die.hold) {
      die.hold = true;
    } else {
      die.hold = false;
    }
    return die;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Turn);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Dice {
  constructor() {
    this.sides = 6;
    this.value = this.randomValue();
    this.hold = false;
  }
  randomValue() {
    return Math.floor(Math.random() * this.sides + 1);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Dice;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const DisplayTurn = {
  getDiceElement(diceNum) {
    return document.getElementById(`${diceNum}`);
  },
  visibility(diceArr, display) {
    diceArr.forEach((dice, idx) => {
      if (display === 'show') {
        this.getDiceElement(idx).style.visibility = 'visible';
        document.querySelector('.scorecard').classList.add('active');
      } else {
        this.yahtzee('hide', diceArr);
        this.getDiceElement(idx).style.visibility = 'hidden';
        document.querySelector('.scorecard').classList.remove('active');
      }
    });
  },
  holdDice(diceNum) {
    this.getDiceElement(diceNum).classList.toggle('hold');
  },
  init(rollData) {
    this.visibility(rollData.dice, 'hide');
    this.remaining(rollData.rollCount);
    rollData.dice.forEach((dice, idx) => {
      this.getDiceElement(idx).classList.remove('hold');
    });
  },
  turnInfo(rollData) {
    this.visibility(rollData.dice, 'show');
    this.currentDice(rollData.dice);
    this.remaining(rollData.rollCount);
  },
  currentDice(diceArr) {
    diceArr.forEach((dice, idx) => {
      const diceElement = this.getDiceElement(idx);
      diceElement.src = `assets/dice-${dice.value}.png`;
    });
  },
  remaining(rolls) {
    document.querySelector('.roll-count').textContent = rolls;
    if (rolls === 0) {
      document.querySelector('.roll-btn').classList.add('noRolls');
    } else {
      document.querySelector('.roll-btn').classList.remove('noRolls');
    }
  },
  yahtzee(status, dice) {
    if (status === 'show') {
      document.querySelector('.currentRoll').style.display = 'block';
      dice.forEach((each, idx) => {
        this.getDiceElement(idx).style.opacity = 0.5;
      });
    } else {
      document.querySelector('.currentRoll').style.display = 'none';
      dice.forEach((each, idx) => {
        this.getDiceElement(idx).style.opacity = 1;
      });
    }
  },
  game(status, gameTotals) {
    if (status === 'winner') {
      document.querySelector('.dice-area').style.display = 'none';
      document.querySelector('.game-over').style.display = 'block';
      if (gameTotals.highScore < gameTotals.total) {
        document.querySelector('.winner').style.display = 'block';
        document.querySelector('.try-again').style.display = 'none';
      } else {
        document.querySelector('.try-again').style.display = 'block';
        document.querySelector('.winner').style.display = 'none';
      }
    } else {
      document.querySelector('.dice-area').style.display = 'flex';
      document.querySelector('.game-over').style.display = 'none';
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (DisplayTurn);

/***/ })
],[0]);
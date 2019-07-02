(function () {
  function tableCreate(){
    let container = document.querySelector('.container'),
        tbl  = document.createElement('table');
    let items ={};

    let currentCount = 0;
    for(let i = 0; i < 3; i++){
      let tr = tbl.insertRow();
      for(let j = 0; j < 3; j++){
        let td = tr.insertCell();

        td.addEventListener('click', alertRowCell);

        items[i +"_" +j] = td;
        function alertRowCell(e){
          currentCount++;
          if(!this.className) {
            if(currentCount%2 === 1) {
              this.className = 'cross';
            } else {
              this.className = 'round';
            }
          }

          let cell = e.target || window.event.srcElement;
          let winner = '';


          function checkRow() {
            for (let i = 0; i < 3; i++) {
              if(cell.className !== items[`${i}_${cell.cellIndex}`].className) {
                return false;
              }
            }
            return true;
          }
          let checkRowResult = checkRow();

          function checkColumn () {
            for (let i = 0; i < 3; i++) {
              if(cell.className !== items[`${cell.parentNode.rowIndex}_${i}`].className) {
                return false;
              }
            }
            return true;
          }
          let checkColumnResult = checkColumn();

          function checkDiagonal1 () {
            for (let i = 0; i < 3; i++) {
              if(cell.className !== items[`${i}_${i}`].className) {
                return false;
              }

            }
            return true;
          }
          let checkDiagonalResult1 = checkDiagonal1();

          function checkDiagonal2 () {
            for (let i = 0; i < 3; i++) {
              if(cell.className !== items[`${i}_${2 - i}`].className) {
                return false;
              }
            }
            return true;
          }
          let checkDiagonalResult2 = checkDiagonal2();

          function clear() {
            for (const key in items) {
              if (items.hasOwnProperty(key)) {
                const element = items[key];
                element.className = '';
              }
            }
            currentCount = 0;

          }

          if (checkRowResult || checkColumnResult || checkDiagonalResult1 || checkDiagonalResult2) {
            winner = cell.className;
            alert(`${winner} wins!`);
            clear();
          } else if(currentCount === 9) {
            alert('Nobody wins :C');
            clear();
          }

        }
      }
    }
    container.appendChild(tbl);

  }
  tableCreate();
})();
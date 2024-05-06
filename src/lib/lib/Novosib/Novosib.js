function Novosib() {
  const ss1 = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/14a6cJV4k2059nr0gbdUtw9StyTGfdGSAx5UIZLC6prI/edit#gid=106053277');
  var ss2 = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1GS_ASYkkjIZ9UaHO9vWPbKWIHuefEluNKm8w0gDqcoM/edit#gid=654803973');
  var targetSheet = ss2.getSheetByName(all_fillin.getSelectedSheetName());

  let columns = ["C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE", "AF", "AG"];
  let rowOffset = 0;
  let numberOfIterations = 31

  for(let iteration = 0; iteration < numberOfIterations; iteration++){

    let column = columns[iteration]


    let currentColumnDay = column + '151';
    let currentColumnNight = column + '152';
    let currentColumnPartU = column + '153';

    

    var number_of_work_schedules_day = ss1.getSheetByName(all_fillin.getSelectedSheetName2()).getRange(currentColumnDay).getValue();
    var number_of_work_schedules_night = ss1.getSheetByName(all_fillin.getSelectedSheetName2()).getRange(currentColumnNight).getValue();
    var number_of_work_schedules_part_u = ss1.getSheetByName(all_fillin.getSelectedSheetName2()).getRange(currentColumnPartU).getValue();

    // Деление значения из C172 на 2

    var dividedValue_day = Math.floor(number_of_work_schedules_day / 2);
    var dividedValue_night = Math.floor(number_of_work_schedules_night / 2);
    var dividedValue_part_u = Math.floor(number_of_work_schedules_part_u / 1);

    // Остаток от деления
    var remainder_day = number_of_work_schedules_day % 2;
    var remainder_night = number_of_work_schedules_night % 2;
    var remainder_part_u = number_of_work_schedules_night % 1;

    var all = {'day':[{'half':['N37'],'full':['G37','H37','I37','J37','K37','M37','O37','P37','Q37','R37']}],


              'night':[{half:[],full:['S39','T39','U39','V39','X39','Y39','Z39','C91','E91','F91']}],


                  'u_part_time':[{'half':['G41','K41'],'full':['H41','I41','J41']}
                      ]};

    var updatedAll = updateAllArray(all, rowOffset)



    

    fillCellsFromArrayFullDay(updatedAll['day'][0]['full']);
    fillCellsFromArrayHalfDay(updatedAll['day'][0]['half']);
    FillCellsIfRemainderDay(remainder_day);

    fillCellsFromArrayFullNight(updatedAll['night'][0]['full']);
    fillCellsFromArrayHalfNight(updatedAll['night'][0]['half']);
    FillCellsIfRemainderNight(remainder_night);

    fillCellsFromArrayFullPartU(updatedAll['u_part_time'][0]['full']);
    fillCellsFromArrayHalfPartU(updatedAll['u_part_time'][0]['half']);
    FillCellsIfRemainderPartU(remainder_part_u)

    
    rowOffset += 52;
    
  }

  function fillCellsFromArrayFullDay(cellsArray) {
    if (dividedValue_day == 0) {
      return;
    }
    for (var i = 0; i < cellsArray.length; i++) {
      var cell = targetSheet.getRange(cellsArray[i]);
      cell.setValue(dividedValue_day);}
  }

  function fillCellsFromArrayFullNight(cellsArray) {
    if (dividedValue_night == 0) {
      return;
    }
    for (var i = 0; i < cellsArray.length; i++) {
      var cell = targetSheet.getRange(cellsArray[i]);
      cell.setValue(dividedValue_night);}
  }
  function fillCellsFromArrayFullPartU(cellsArray) {
    if (dividedValue_part_u == 0) {
      return;
    }
    for (var i = 0; i < cellsArray.length; i++) {
      var cell = targetSheet.getRange(cellsArray[i]);
      cell.setValue(dividedValue_part_u);}
  }


 function fillCellsFromArrayHalfDay(cellsArray) {
    if (dividedValue_day == 0) {
      return;
    }
    for (var i = 0; i < cellsArray.length; i++) {
      var cell = targetSheet.getRange(cellsArray[i]);
      cell.setValue(dividedValue_day/2);
    }
  }
  function fillCellsFromArrayHalfNight(cellsArray) {
    if (dividedValue_night == 0) {
      return;
    }
    for (var i = 0; i < cellsArray.length; i++) {
      var cell = targetSheet.getRange(cellsArray[i]);
      cell.setValue(dividedValue_night/2);
    }
  }
  function fillCellsFromArrayHalfPartU(cellsArray) {
    if (dividedValue_part_u == 0) {
      return;
    }
    for (var i = 0; i < cellsArray.length; i++) {
      var cell = targetSheet.getRange(cellsArray[i]);
      cell.setValue(dividedValue_part_u/2);
    }
  }


  function FillCellsIfRemainderDay(endNumber) {
    if (endNumber>0){
      dividedValue_day++;
      for (var i = 1; i <= endNumber; i++) {
        fillCellsFromArrayFullDay(updatedAll['day'][i-1]['full']);
        fillCellsFromArrayHalfDay(updatedAll['day'][i-1]['half']);
      }
    }

  }
  function FillCellsIfRemainderNight(endNumber) {
    if (endNumber>0){
      dividedValue_night++;
      for (var i = 1; i <= endNumber; i++) {
        fillCellsFromArrayFullNight(updatedAll['night'][i-1]['full']);
        fillCellsFromArrayHalfNight(updatedAll['night'][i-1]['half']);
      }
    }
  }
  function FillCellsIfRemainderPartU(endNumber) {
    if (endNumber>0){
      dividedValue_part_u++;
      for (var i = 1; i <= endNumber; i++) {
        fillCellsFromArrayFullNight(updatedAll['u_part_time'][i-1]['full']);
        fillCellsFromArrayHalfNight(updatedAll['u_part_time'][i-1]['half']);
      }
    }

  }

  function updateAllArray(all, rowOffset) {
    let updatedAll = JSON.parse(JSON.stringify(all)); // Создаем глубокую копию массива all

    // Функция для обновления ссылок на ячейки
    function updateCellReferences(cellArray) {
        return cellArray.map(cellRef => {
            let [column, row] = splitCellReference(cellRef);
            return column + (parseInt(row) + rowOffset);
        });
    }

    // Функция для разделения ссылки на ячейку на столбец и строку
    function splitCellReference(cellRef) {
        let match = cellRef.match(/([A-Z]+)(\d+)/);
        return [match[1], match[2]];
    }

    // Обновляем ссылки на ячейки в каждом элементе массива all
    for (let period in updatedAll) {
        updatedAll[period].forEach(timeSlot => {
            timeSlot.half = updateCellReferences(timeSlot.half);
            timeSlot.full = updateCellReferences(timeSlot.full);
        });
    }

    return updatedAll;
  }
}
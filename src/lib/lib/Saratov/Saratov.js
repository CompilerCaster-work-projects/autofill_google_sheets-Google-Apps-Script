function Saratov() {
  const ss1 = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/14a6cJV4k2059nr0gbdUtw9StyTGfdGSAx5UIZLC6prI/edit#gid=106053277');
  var ss2 = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1GS_ASYkkjIZ9UaHO9vWPbKWIHuefEluNKm8w0gDqcoM/edit#gid=654803973');
  var targetSheet = ss2.getSheetByName(all_fillin.getSelectedSheetName());

  let columns = ["C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA", "AB", "AC", "AD", "AE", "AF", "AG"];
  let rowOffset = 0;
  let numberOfIterations = 31

  for(let iteration = 0; iteration < numberOfIterations; iteration++){

    let column = columns[iteration]


    let currentColumnDay = column + '100';
    let currentColumnNight = column + '101';
    let currentColumnPartU = column + '102';

    

    var number_of_work_schedules_day = ss1.getSheetByName(all_fillin.getSelectedSheetName2()).getRange(currentColumnDay).getValue();
    var number_of_work_schedules_night = ss1.getSheetByName(all_fillin.getSelectedSheetName2()).getRange(currentColumnNight).getValue();
    var number_of_work_schedules_part_u = ss1.getSheetByName(all_fillin.getSelectedSheetName2()).getRange(currentColumnPartU).getValue();

    // Деление значения из C172 на 2

    var dividedValue_day = Math.floor(number_of_work_schedules_day / 3);
    var dividedValue_night = Math.floor(number_of_work_schedules_night / 4);
    var dividedValue_part_u = Math.floor(number_of_work_schedules_part_u / 1);

    // Остаток от деления
    var remainder_day = number_of_work_schedules_day % 3;
    var remainder_night = number_of_work_schedules_night % 4;
    var remainder_part_u = number_of_work_schedules_night % 1;

    var all = {'day':[{'half':['U22'],'full':['K22','L22','M22','O22','P22','Q22','R22','S22','T22','V22']},

                      {'half':['P23'],'full':['K23','L23','N23','O23','Q23','R23','S23','T23','U23','V23']},

                      {'half':['O24'],'full':['K24','L24','M24','P24','Q24','R24','S24','T24','U24','V24']}],


              'night':[{half:[],full:['W25','X25','Y25','C77','D77','D77','F77','G77','H77','I77','J77']},

                      {half:['X26','D78'],full:['W26','Y26','Y26','Z26','E78','F78','G78','H78','I78','J78']},

                      {half:['Z27','F79'],full:['W27','X27','C79','D79','E79','G79','H79','I79','J79']},

                      {half:[],full:['W28','X28','Y28','Z28','E80','F80','G80','H80','I80','J80']}],


                  'u_part_time':[{'half':['G30','K30'],'full':['H30','I30','J30']}
                      ]};

    var updatedAll = updateAllArray(all, rowOffset)



    

    fillCellsFromArrayFullDay(updatedAll['day'][0]['full']);
    fillCellsFromArrayFullDay(updatedAll['day'][1]['full']);
    fillCellsFromArrayFullDay(updatedAll['day'][2]['full']);
    fillCellsFromArrayHalfDay(updatedAll['day'][0]['half']);
    fillCellsFromArrayHalfDay(updatedAll['day'][1]['half']);
    fillCellsFromArrayHalfDay(updatedAll['day'][2]['half']);
    FillCellsIfRemainderDay(remainder_day);

    fillCellsFromArrayFullNight(updatedAll['night'][0]['full']);
    fillCellsFromArrayFullNight(updatedAll['night'][1]['full']);
    fillCellsFromArrayFullNight(updatedAll['night'][2]['full']);
    fillCellsFromArrayFullNight(updatedAll['night'][3]['full']);
    fillCellsFromArrayHalfNight(updatedAll['night'][0]['half']);
    fillCellsFromArrayHalfNight(updatedAll['night'][1]['half']);
    fillCellsFromArrayHalfNight(updatedAll['night'][2]['half']);
    fillCellsFromArrayHalfNight(updatedAll['night'][3]['half']);
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
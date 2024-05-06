function onOpen() {
  SpreadsheetApp.getUi()
  var ui = SpreadsheetApp.getUi()
  // Or DocumentApp or FormApp.
    ui.createMenu('Заполнение')
    .addItem('Выбрать лист потребностей', 'showSheetsDialog')
    .addItem('Выбрать лист графика', 'showSheetsDialog2')
    .addItem('Заполнить всё', 'menuItem1')
    .addToUi();
      
}

function menuItem1() {
  main.myFunction();
}

function showSheetsDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Page')
      .setWidth(400)
      .setHeight(300);
  SpreadsheetApp.getUi()
      .showModalDialog(html, 'Выберите лист');
}

function showSheetsDialog2() {
  var html = HtmlService.createHtmlOutputFromFile('Page2')
      .setWidth(400)
      .setHeight(300);
  SpreadsheetApp.getUi()
      .showModalDialog(html, 'Выберите лист');
}

// Эта функция будет вызываться в HTML-файле
function getSheetNames() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  return sheets.map(function(sheet) {
    return sheet.getName();
  });
}

function getSheetNames2() {
  var spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/14a6cJV4k2059nr0gbdUtw9StyTGfdGSAx5UIZLC6prI/edit#gid=106053277'; // Замените YOUR_SPREADSHEET_URL на реальный URL файла
  var spreadsheet = SpreadsheetApp.openByUrl(spreadsheetUrl);
  var sheets = spreadsheet.getSheets();
  return sheets.map(function(sheet) {
    return sheet.getName();
  });
}

// Функция для сохранения выбранного листа
function saveSelectedSheet(sheetName) {
  PropertiesService.getScriptProperties().setProperty('selectedSheet', sheetName);
}

function saveSelectedSheet2(sheetName) {
  PropertiesService.getScriptProperties().setProperty('selectedSheet2', sheetName);
}

function getSelectedSheetName() {
  return PropertiesService.getScriptProperties().getProperty('selectedSheet');
}

function getSelectedSheetName2() {
  return PropertiesService.getScriptProperties().getProperty('selectedSheet2');
}
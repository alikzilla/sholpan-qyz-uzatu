// UPDATED SCRIPT — paste this into Apps Script, replacing the old code.
// Then: Deploy → New deployment → Web app
//   Execute as: Me | Who has access: Anyone
// Copy the new Web App URL and update GOOGLE_SHEET_URL in the HTML.

var SHEET_ID = "1ZeDWFlh4v0av8mqo_UL1E8_kwYrDQbi2g2ADUlafL4Y";

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    // Add header row once if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Дата", "Аты-жөні", "Жауап", "Адам саны"]);
    }

    var name  = e.parameter.name  || "";
    var radio = e.parameter.radio || "";
    var count = e.parameter.count || "1";

    sheet.appendRow([new Date(), name, radio, count]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Divine Seeds Management Portal - Google Apps Script entry point
function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate()
    .setTitle('Divine Seeds International Schools - Portal')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

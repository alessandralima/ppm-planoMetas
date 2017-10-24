module.exports = {
  'Sample functional test' : function (browser) {
    browser
      .url('http://ppm-planometas-stagingtest.mybluemix.net/')
      .pause(3000)
      .waitForElementVisible('#queroConhecer', 60000)
      // .setValue('input.gsfi', 'Test')
      // .waitForElementPresent('#search-pag', 60000)
      .end();
  }
};

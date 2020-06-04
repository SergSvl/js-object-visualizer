/* Файл настроек смарт-грида */
var smartgrid = require('smart-grid');

var settings = {
  outputStyle: 'less',
  columns: 12,
  offset: "30px",
  //mobileFirst: true,
  container: {
    // maxWidth: "1280px",
    // fields: "30px"
    maxWidth: "1200px",
    fields: "15px"
  },
  breakPoints: {
    lg: {
      width: '1200px', /* -> @media (max-width: 1100px) */
    },
    md: {
      width: "992px",
      fields: "15px" // не может быть меньше, чем offset/2, т.к. появится гориз. полоса проктурки
    },
    sm: {
        width: "720px"
    },
    xs: {
        width: "576px"
    },
    xxs: {
        width: "420px"
    }
  }
};
smartgrid('./src/assets/css', settings);
// запускать: node makeSmartGrid.js

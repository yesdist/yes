const fs = require('fs');
const ejs = require('ejs');

const compileHtml = fileName => {
  ejs.renderFile(`./src/${fileName}.ejs`, {}, {}, function(err, str) {
    if (err) {
      console.error('renderFile error:', err);
    } else {
      fs.writeFile(`./dist/${fileName}.html`, str, function(err) {
        if (err) {
          console.error('writeFile error:', err);
        } else {
          console.log(`./dist/${fileName}.html file was created`);
        }
      });
    }
  });
};

['index', 'about', 'services', 'work', 'contact'].map(compileHtml);

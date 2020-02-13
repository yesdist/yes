const fs = require('fs');
const ejs = require('ejs');

const compileHtml = fileName => {
  ejs.renderFile(`./src/${fileName}.ejs`, {}, {}, function(err, str) {
    if (err) {
      console.error('renderFile error:', err);
    } else {
      fs.writeFile(`./docs/${fileName}.html`, str, function(err) {
        if (err) {
          console.error('writeFile error:', err);
        } else {
          console.log(`./docs/${fileName}.html file was created`);
        }
      });
    }
  });
};

['index', 'about', 'services', 'work', 'contact'].map(compileHtml);

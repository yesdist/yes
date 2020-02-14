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

/*

https://onlinesellingexperiment.com/how-to-use-value-props-to-get-more-wholesale-accounts/

With that in mind, here are the 10 value props we reference the most often (in no particular order):

Adherence to MAP policies
Buying and Supporting Product that is Out of Stock
Running PPC Ads
Positive Customer Experiences
Multiple Online Distribution channels
Reporting and Monitoring of the Suppliers (Brand) Listings
Receiving All Product Direct – No Drop Shipping
Have A Brick & Mortar Storefront
Will Buy Closeouts
Developing & Maintaining Good Quality Listings*/

// - Will you be expanding the distribution channels their products are available on?
// - Can you fix or improve their Amazon listings?
// - Will you spend your own money on ads to sell their products?

//Как я вижу наш сайт - основа отсюда -  https://www.etailz.com/  + частично єто https://www.geekseller.com/ + https://www.trackstreet.com/
//Шаблоны - тут https://www.templatemonster.com/category/wholesale-store/
//Можно начать накидывать статический сайт на гитхабе, а там посмотрим
//Таже тут есть варианты Value-added сайтов - https://marketplace.walmart.com/solutions/

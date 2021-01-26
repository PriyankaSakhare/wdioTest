import SearchPage from '../pages/search.page';
import resources from '../resources';
import { waitForTextChange } from '../utilities/helper';
import allureReporter from '@wdio/allure-reporter';

describe('Ebay Product Search',()=>{

    it('should open url and compare vaild title',()=>{
       // browser.url('https://www.ebay.com/');
       SearchPage.open();
        expect(browser).toHaveTitle(resources.homeTitle);
    });
    it('should sercah a product and verify the serch text value',()=>{
        //const searchInput = $('#gh-ac');
        //const searchButton= $('#gh-btn');
        allureReporter.addSeverity('Critical');
        SearchPage.searchInput.addValue('Laptop');
        SearchPage.searchButton.click();
        //searchInput.addValue('Laptop');
        //searchButton.click();
        expect(SearchPage.searchInput).toHaveValue('Laptop');
    });
    it('should redirect to the new page and verify title of new page',()=>{
        expect(browser).toHaveTitle(resources.laptopTitle);
    });

    it('should update the serach catagory',()=>{

        //const searchCategory= $('#gh-cat option:nth-child(1)');
       /*
            browser.waitUntil( 
                function() {
               return SearchPage.searchCategory.getText() === 'PC Laptops & Netbooks';
             },
             { timeout :1000 }
            );*/
            allureReporter.addFeature('Search Category');
            waitForTextChange(SearchPage.searchCategory,resources.subCategoryTile, 3000);
            expect(SearchPage.searchCategory).toHaveText('PC Laptops & Netbooks');

    });
})
import {expect as chaiExpect} from 'chai';
import Watches from '../pages/watches.page';
import resources from '../resources';
import { waitAndClick } from '../utilities/helper';

describe('watches', () => {
    before(() => {
        Watches.open();
       
       // browser.pause(1000);//implicit wait
       //Watches.gdprBanner.waitForDisplayed({timeout : 1000});
      // Watches.gdprBannerAccpetButton.click();
      //browser.pause(1000);
       Watches.fashionLink.moveTo();
       
      // Watches.watchesLink.waitForDisplayed({timeout : 1000}); //explicit wait
        //Watches.watchesLink.click(); 
       
     waitAndClick(Watches.watchesLink,3000);
       
       // Watches.getWatchesCategoryListText();
     // console.log(Watches.getWatchesCategoryListText());
    });
/*
    after(() => {
        browser.url('https://ebay.com');
    });

    afterEach(() => {
        browser.refresh();
    }); */

    it('should verify watches category list', () => {
        // Watches.getWatchesCategoryListText();
        // console.log(Watches.getWatchesCategoryListText());
        const watechesCategoryList = Watches.getWatchesCategoryListText();
        chaiExpect(watechesCategoryList).to.deep.equal(
            resources.watchesCategoryList
            );
        
    });


    it('should show the banner container', () => {
       // Watches.open();
        //browser.url('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
        // browser.acceptAlert(); 
        //const banner= $('section.b-promobanner');
        //Watches.banner();
        expect(Watches.banner).toBeDisplayed();
    });

    it('should show the banner title', () => {
        //const infoTitle= $('.b-promobanner__info-title');
       //browser.acceptAlert();
       expect(Watches.infoTitle).toHaveTextContaining('Up to 30%'); 
      // expect(Watches.infoTitle).toHaveTextContaining('something'); 
       // browser.pause(5000);
        //browser.acceptAlert();
        //browser.pause(5000);
    });

    it('should contain link on banner and verify link is clickable', () => {
        //const bannerButton= $('.b-promobanner__info-btn');
        expect(Watches.bannerButton).toHaveLinkContaining('https://www.ebay.com/e/fashion/');
        expect(Watches.bannerButton).toBeClickable();
    }); 
    
    it('should click on shop button and verify the url', () => {
        //const bannerButton= $('.b-promobanner__info-btn');
        Watches.bannerButton.click();
        const url= browser.getUrl();
        chaiExpect(url).to.include('/fashion/');
        //expect(browser).toHaveUrl('https://www.ebay.com/e/fashion/rolex-021720');
    });
});


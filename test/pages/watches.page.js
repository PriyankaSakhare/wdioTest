import Page from './page';
class Watches extends Page {
   // const banner= $('section.b-promobanner');
    get banner(){
        return $('section.b-promobanner'); //$ findElement
       // return $$('section.b-promobanner')[0]; //$$ findElements, return array
    }
//const infoTitle= $('.b-promobanner__info-title');
    get infoTitle(){
    return $('.b-promobanner__info-title');
    }

    get watchesCategoryList()
    {
        return $$('section[id="s0-16-13-0-1[0]-0-0"] ul li');// returning collection of 6 elements
    }

    //const bannerButton= $('.b-promobanner__info-btn');
    get bannerButton(){
        return $('.b-promobanner__info-btn');
        }
    get fashionLink(){
        return $$('.hl-cat-nav__js-tab a[href *="Fashion"]')[0];
    }

    get watchesLink(){
       return  $('.hl-cat-nav__sub-cat-col a[href *="Watches-Parts"]');
       // return $('//*[@id="mainContent"]/div[1]/ul/li[4]/div[2]/div[1]/div[2]/ul/li[1]/a');
    }

    get gdprBanner(){
        return $('gdpr-ghfe-ds6 gdpr-banner--slideup keyboard-trap--active');
    }

    get gdprBannerAccpetButton(){

        return $('gdpr-//*[@id="gdpr-banner-accept"]-accept');
    }
    open()
    {
     // super.open('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
      super.open('https://www.ebay.com/');

    }

    getWatchesCategoryListText()
    {
        /*
        return this.watchesCategoryList.map((element) =>
        console.log(element.getText())
        );*/

        const watchesList = [];
        this.watchesCategoryList.map((element) =>
        watchesList.push(element.getText())
        );
        return watchesList;
    }
    
}

export default new Watches();
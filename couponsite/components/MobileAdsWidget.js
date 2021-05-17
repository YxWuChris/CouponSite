import React from 'react';
import AdSense from 'react-adsense';

const MobileAdsWidget = () => {

 const MobileAdsStyle = {
    backgroundColor:"black",
    height:"200px"
 }

        // const installGoogleAds = () => {
        //   const elem = document.createElement("script");
        //   elem.src =
        //     "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        //   elem.async = true;
        //   elem.defer = true;
        //   document.body.insertBefore(elem, document.body.firstChild);
        // };
        // installGoogleAds();



    return (
        <div style={MobileAdsStyle}>
        {/* <AdSense.Google
          client='ca-pub-6080883455379256'
          slot='3739039075'
          style={{ display: 'block'}}
          format='auto'
          responsive='true'
        /> */}
        </div>
    );
}

export default MobileAdsWidget
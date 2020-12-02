import Title from '../components/Title'
import NavBar from '../components/NavBar'
import { useMediaQuery } from 'react-responsive'
import { useState, useEffect } from 'react'

const Contact = () => {

    const mobileWidth = useWindowSize().width

    const Container = {
        backgroundColor: "#F5F5F5",
        width: "100%",
        height: "100%",
        position: "absolute"
    }

    const ContentContainer = {
        width: "60%",
        minHeight: "60%",
        padding: "20px",
        backgroundColor: "white",
        marginTop: "50px",
        marginLeft: "auto",
        marginRight: "auto",
    }

    const Paragraph = {
        fontSize: "1.6rem",
        fontFamily: "ヒラギノ角ゴ Pro W3"
    }

    const EnglishParagraph = {
        fontSize: "1.3rem",
        fontFamily: "ヒラギノ角ゴ Pro W3",
        color: "gray"
    }

    const cocopons = {
        display: "inline",
        color: "coral"
    }

    const ClaimContainer = {
        marginTop: "100px"
    }

    const MobileContainer = {
        width:mobileWidth
    }


    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 800px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })


    return (
        <>
            <Title />
            <NavBar />
            {isDesktopOrLaptop && <>
            <div style={Container}>
                <div style={ContentContainer}>
                    <div>
                        <p style={Paragraph}><div style={cocopons}>ココポンズ(cocopons.com) </div> は、アメリカを代表とするソーシャルEコマースプラットフォームです。アメリカとカナダの最新割引き情報を日本語で毎日更新し、海外での実用的な生活ガイドを提供します。</p>
                        <p style={Paragraph}><div style={cocopons}>ココポンズ(cocopons.com) </div> では更に、日本の方へ役立つ知識となる海外生活情報プラットフォームになることを目的として、アメリカのシアトルで設立されました。</p>
                        <p style={Paragraph}>お問い合わせは <div style={cocopons}>cocoponsjp.contact@gmail.com</div> まで。</p>
                    </div>
                    <div style={ClaimContainer}>
                        <p style={EnglishParagraph}>cocopons.com is a Japanese website dedicated to providing the latest and most useful discount information and life guides in the United States.</p>
                        <p style={EnglishParagraph}>The information on this website is provided by cocopons.com. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>
                    </div>
                </div>
            </div>
            </>
            }{
                isTabletOrMobile && <>
                <div style={MobileContainer}>
                <div style={ContentContainer}>
                    <div>
                        <p style={Paragraph}><div style={cocopons}>ココポンズ(cocopons.com) </div> は、アメリカを代表とするソーシャルEコマースプラットフォームです。アメリカとカナダの最新割引き情報を日本語で毎日更新し、海外での実用的な生活ガイドを提供します。</p>
                        <p style={Paragraph}><div style={cocopons}>ココポンズ(cocopons.com) </div> では更に、日本の方へ役立つ知識となる海外生活情報プラットフォームになることを目的として、アメリカのシアトルで設立されました。</p>
                        <p style={Paragraph}>お問い合わせは <div style={cocopons}>cocoponsjp.contact@gmail.com</div> まで。</p>
                    </div>
                    <div style={ClaimContainer}>
                        <p style={EnglishParagraph}>cocopons.com is a Japanese website dedicated to providing the latest and most useful discount information and life guides in the United States.</p>
                        <p style={EnglishParagraph}>The information on this website is provided by cocopons.com. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>
                    </div>
                </div>
            </div>
            </>

            }
        </>
    )

    function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); 
    return windowSize;
}


}




export default Contact
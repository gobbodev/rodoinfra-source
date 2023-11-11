import { ConfigSiteProvider } from "codiedigital/dist/cjs/contexts/configs";
import { GetInitialConfigsSite } from "codiedigital/dist/cjs/common-ssrs-api/_app";
import { DynamicFonts } from "codiedigital/dist/cjs/public/fonts/generate-dynamic-fonts/index";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  EffectFade,
  Virtual,
  Navigation,
  Thumbs,
  Pagination,
  Autoplay,
} from "swiper";

import { InputStyles, theme, fontsConfiguration } from "src/init-project";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "styles/reset.css";
import "codiedigital/dist/cjs/fonts.css";

// import "public/fonts/fonts.css" fonte removida

import { GlobalStyle } from "styles/global";

SwiperCore.use([Pagination, Autoplay, Navigation, Virtual, EffectFade, Thumbs]);

const App = (props) => {
  return (
    <>
      <ConfigSiteProvider
        EffectFade={EffectFade}
        Swiper={Swiper}
        SwiperSlide={SwiperSlide}
        theme={props.theme}
        configs={props.configs.configs}
        InputStyles={InputStyles}
      >
        <GlobalStyle />

        <ToastContainer />

        <props.Component {...props.pageProps} />
      </ConfigSiteProvider>
    </>
  );
};

App.getInitialProps = async () => {
  return GetInitialConfigsSite({ theme });
};

export default App;

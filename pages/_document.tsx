import Document, { Html, Head, Main, NextScript } from 'next/document';
import { defaultPageTitle, defaultMetaDescription } from '@utils/constant';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="manifest.json" />
          <meta key="meta-title" title={defaultPageTitle} />
          <meta
            key="meta-description"
            name="description"
            content={defaultMetaDescription}
          />
          <meta name="application-name" content={defaultPageTitle} />
          <meta name="description" content={defaultMetaDescription} />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#fff" />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={defaultPageTitle} />
          <link
            href="https://res.cloudinary.com/krinawibisana/image/upload/v1636741972/iphone5_splash_pfaqmy_sb0zsh.png"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/krinawibisana/image/upload/v1636741972/iphone6_splash_xqx0hw_y2hgq8.png"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/krinawibisana/image/upload/v1636741973/iphoneplus_splash_g0nszn_bifkq7.png"
            media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/krinawibisana/image/upload/v1636741972/iphonex_splash_dckyw6_u5oiwt.png"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/krinawibisana/image/upload/v1636741971/iphonexr_splash_csfvmc_rtx04s.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/krinawibisana/image/upload/v1636741971/iphonexsmax_splash_jorygo_qygiwi.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/krinawibisana/image/upload/v1636741971/ipad_splash_s83dti_fotk5v.png"
            media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/krinawibisana/image/upload/v1636741971/ipadpro1_splash_a8tgre_auid5o.png"
            media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/krinawibisana/image/upload/v1636741971/ipadpro3_splash_o8tjoy_jehsyp.png"
            media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://res.cloudinary.com/krinawibisana/image/upload/v1636741972/ipadpro2_splash_gasnm4_i01lfs.png"
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://res.cloudinary.com/krinawibisana/image/upload/v1636741970/apple-touch-icon_xeg5un_zgitj1.png"
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://res.cloudinary.com/krinawibisana/image/upload/v1636741970/icon-32_tkzgni_itg35e.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://res.cloudinary.com/krinawibisana/image/upload/v1636741970/icon-16_xjyuto_sygwod.png"
          />
          <link
            rel="mask-icon"
            href="https://res.cloudinary.com/krinawibisana/image/upload/v1636741971/pokeball-icon_stgm3g_awtt3z.svg"
            color="#5bbad5"
          />
          <link
            rel="shortcut icon"
            href="https://res.cloudinary.com/krinawibisana/image/upload/v1636741971/favicon_ep1bvg_t1ktji.ico"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="" />
          <meta name="twitter:title" content={defaultPageTitle} />
          <meta name="twitter:description" content={defaultMetaDescription} />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/krinawibisana/image/upload/v1636741970/icon-192_ktgoh5_uhhqal.png"
          />
          <meta name="twitter:creator" content="" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={defaultPageTitle} />
          <meta property="og:description" content={defaultMetaDescription} />
          <meta property="og:site_name" content={defaultPageTitle} />
          <meta property="og:url" content="" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/krinawibisana/image/upload/v1616001937/apple-touch-icon_xeg5un.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

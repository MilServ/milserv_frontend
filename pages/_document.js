import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* 
       Global site tag (gtag.js) - Google Analytics 
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-178265038-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'UA-178265038-1');
</script> */}

          {/* <meta charSet="UTF-8" /> */}
          {/* <z
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          /> */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
          />
          <link rel="stylesheet" href="/static/css/styles.css" />
          <link rel="shortcut icon" href="/static/owllogo.jpg" />
        </Head>
        <body
          style={{ width: "100", margin: 0, padding: 0, overflowX: "hidden" }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

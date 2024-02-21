import React from "react";
import "./Main.css";
function Main() {
  return (
    <main>
      <section id="urlbox">
        <h1>Paste the URL to be shortened</h1>
        <form action="" method="post">
          <div id="formurl">
            <input
              type="text"
              name="u"
              placeholder="Enter the link here"
              className="input"
            />
            <div id="formbutton">
              <input type="submit" value="Shorten URL" className="button" />
            </div>
          </div>
        </form>
      </section>
      <p>
        ShortURL is a free tool to shorten URLs and generate short links
        <br />
        URL shortener allows to create a shortened link making it easy to share
      </p>
      <section id="emailbox">
        <h2>Want More? Try Premium Features!</h2>
        <p class="boxtextcenterdesc">
          Custom short links, powerful dashboard, detailed analytics, API, UTM
          builder, QR codes, browser extension, app integrations and support
        </p>
        <a href="/" class="colorbutton">
          Create Account
        </a>
        <br />
        <br />
      </section>
    </main>
  );
}

export default Main;

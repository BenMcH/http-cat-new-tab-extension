# HTTP.cat new tab extension

This is about as simple of an extension as you can have. It simply replaces the new tab page with an html page that loads in a random http status image from https://http.cat/

# Local testing

In order to test this extension locally, you can add this directory as a temporary extension to firefox at about:debugging. Alternatively, you can start a local web server to work on the HTML and javascript directly by using `npx parcel index.html` and visiting the new tab page at http://localhost:1234/

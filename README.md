<h1>utm-alternative</h1>

This project sets a new cookie intended to be a replacement for the Google Analytics' sunsetted utmz / __utmz cookie. In a cookie called "traffic_source", this script sets all url parameters in a JSON string. This is useful for any sites that do any server side capturing of url parameter info from the old utmz cookie for internal campaign tracking. It should be easy to modify any existing scripts to parse this cookie instead of the utmz cookie.

This project is a fork of https://github.com/dm-guy/utm-alternative. The original project focused on capturing only the campaign and not the other parameters such as medium and source. This project also tries to adhere closer to the the Google Analytics lexicon for organic search and direct traffic.

<h2>Installation</h2>

Change the ".YOURDOMAIN.COM" in line 20 to your actual domain. Leave the leading period if you would like to have your cookie also set on any subdomains. Add to Google Tag Manager and voila.

You can also change the name of the cookie being set in line 71, if you'd prefer something else.

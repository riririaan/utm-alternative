utm-alternative
===============

This project aim is to provide the ability to use utm_campaign values inside the DOM (such as in forms), as replacement for Google Analytics UTM cookies with the move to Universal Analytics (UA). Since UA does not allow to read utm cookies and fetch values, this project attempts to 1) create cookies that will use the tracking variable that was declared in the URL and store them on a private cookie; 2) import existing UTM campaign variables to the new cookie.

The SRC value
=============
Since not all analytics platforms employ the utm_campaign, and since the auto-tagging of adwords enables you not to use it, a new campaign tag is suggested = "src". Each time this parameter is declared in the URL, the utm-alternative cookie takes action.

How it works
1) Check whether there is an existing UTMZ cookie with a campaign info. If there is one, it saves it to the new cookie. 
2) If there is also a SRC value, it adds it to the cookie (=concatenate it), unless it already exist as the recent value. 
3) 

Q: Why not with Local Storage but a cookie?
A: Local Storage does not allow you to share data across subdomains easily (if at all). Many advertisers run different campaigns on different web assets.

Q: What to do if I use the utm_campaign any way?
A: Just add src=XXX to the target URL. You can make it identical to the utm_)ca

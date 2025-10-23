# qrl — plan.md

* chrome extension that shows a qr code of the current tab url and copies it to the clipboard on click
* clicking the qr copies the qr code image to clipboard
* show copy URL text option as well

---

* **manifest v3**

  * name: qrl
  * action: popup.html
  * permissions: ["activeTab", "clipboardWrite"]

---

* **popup.html**

  * simple page with a qr canvas centered
  * short text: “click qr to copy image”
* small text link: “or click here to copy url”

---

* **popup.js**

  * get active tab url
  * generate qr code (use small lib like qrcode.min.js)
  * render qr
  * on click → copy qr code image to user's clipboard and flash “qr code copied!" message
  * on text link click → copy url to clipboard and flash “url copied!” message
---

* **files**

  * manifest.json
  * popup.html
  * popup.js
  * qrcode.min.js
  * icon.png
  * plan.md

---

* **behavior**

  * click extension → qr pops up -> copy qr image to clipboard
  * click qr → copy image again, text option to copy URL instead
  * no network calls, works fully offline

---

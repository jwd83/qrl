# qrl

A simple Chrome extension that generates QR codes for the current tab's URL and allows you to copy either the QR code image or URL text to your clipboard.

## Installation

Since this extension is not published on the Chrome Web Store, you'll need to install it manually:

### Step 1: Download the Extension

1. Click the green **Code** button at the top of this page
2. Select **Download ZIP** from the dropdown
3. Extract the ZIP file to a folder on your computer

### Step 2: Load the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** by toggling the switch in the top-right corner
3. Click the **Load unpacked** button
4. Select the folder where you extracted the extension files
5. The qrl extension should now appear in your extensions list

### Step 3: Use the Extension

1. Click the qrl extension icon in your Chrome toolbar
2. A QR code will appear for the current tab's URL
3. **Click the QR code** to copy the image to your clipboard
4. Or **click the text link** below to copy just the URL

## Troubleshooting

**Extension not appearing?**
- Make sure you selected the folder containing `manifest.json`
- Check that Developer mode is enabled

**QR code not generating?**
- Make sure you're on a valid webpage (not chrome:// pages)
- Check the browser console for errors (F12 → Console tab)

**Clipboard not working?**
- Some browsers require HTTPS or localhost for clipboard access
- Make sure you've granted clipboard permissions if prompted

## Development

This extension uses:
- Manifest V3 (latest Chrome extension format)
- [QRCode.js](https://github.com/davidshimjs/qrcodejs) for QR generation
- Vanilla JavaScript (no frameworks)

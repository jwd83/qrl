# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**qrl** is a Chrome Manifest v3 extension that generates QR codes for the current tab's URL and allows copying either the QR code image or the URL text to the clipboard.

## Architecture

This is a simple, offline-first Chrome extension with no backend or network calls:

- **manifest.json**: Manifest v3 configuration with `activeTab` and `clipboardWrite` permissions
- **popup.html/popup.js**: Main UI displaying QR code with copy functionality
- **qrcode.min.js**: Third-party library for QR code generation (e.g., from davidshimjs/qrcodejs or similar)

## Development Commands

### Testing the Extension
Load unpacked extension in Chrome:
1. Navigate to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select this directory

### Reloading Changes
After making changes, click the reload icon on the extension card at `chrome://extensions/`

## Key Implementation Notes

### QR Code Generation
- Use a lightweight QR code library (qrcode.min.js)
- Generate QR from active tab URL on popup open
- Render to canvas element for easy image copying

### Clipboard Operations
- **QR Image**: Convert canvas to blob, then use `navigator.clipboard.write()` with ClipboardItem
- **URL Text**: Use `navigator.clipboard.writeText()`
- Both operations require the `clipboardWrite` permission in manifest

### User Feedback
- Display brief "QR code copied!" or "URL copied!" messages after successful clipboard operations
- Use simple DOM manipulation or CSS transitions for feedback

## File Structure
```
/
├── manifest.json       # Manifest v3 configuration
├── popup.html          # Extension popup UI
├── popup.js            # QR generation and clipboard logic
├── qrcode.min.js       # Third-party QR code library
├── icon.png            # Extension icon (16x16, 48x48, 128x128 recommended)
└── plan.md             # Original project plan
```

## Browser Compatibility
- Target Chrome Manifest v3 (required for new Chrome extensions)
- APIs used: chrome.tabs, navigator.clipboard
- All functionality works offline

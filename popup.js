let currentUrl = '';

// Get active tab URL and generate QR code
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  if (tabs[0]) {
    currentUrl = tabs[0].url;
    generateQR(currentUrl);
  }
});

function generateQR(url) {
  const qrContainer = document.getElementById('qrcode');
  new QRCode(qrContainer, {
    text: url,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.M
  });
}

function showMessage(text) {
  const messageEl = document.getElementById('message');
  messageEl.textContent = text;
  setTimeout(() => {
    messageEl.textContent = '';
  }, 2000);
}

async function copyQRCodeImage() {
  try {
    const canvas = document.querySelector('#qrcode canvas');
    const blob = await new Promise(resolve => canvas.toBlob(resolve));
    await navigator.clipboard.write([
      new ClipboardItem({ 'image/png': blob })
    ]);
    showMessage('QR code copied!');
  } catch (err) {
    console.error('Failed to copy QR code:', err);
    showMessage('Copy failed');
  }
}

async function copyURL() {
  try {
    await navigator.clipboard.writeText(currentUrl);
    showMessage('URL copied!');
  } catch (err) {
    console.error('Failed to copy URL:', err);
    showMessage('Copy failed');
  }
}

// Event listeners
document.getElementById('qrcode').addEventListener('click', copyQRCodeImage);
document.getElementById('copyUrl').addEventListener('click', copyURL);

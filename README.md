## Files Overview

- **manifest.json**: Contains metadata about the extension, permissions, and scripts to be executed.
- **background.js**: Initializes the extension and performs background tasks.
- **content.js**: Injects CSS into each webpage to apply dark mode.
- **popup.html**: Provides a simple popup interface for the extension.
- **icons**: Contains icon images for the extension in different sizes.

## How to Install

1. Clone or download this repository to your local machine.
2. Open Microsoft Edge and go to `edge://extensions/`.
3. Enable "Developer mode" if it is not already enabled.
4. Click "Load unpacked" and select the `ForceDarkModeExtension` folder.

## How It Works

- The `content.js` script injects a CSS style that inverts the colors of the webpage, effectively applying a dark mode.
- Images and videos are reinverted to display correctly.

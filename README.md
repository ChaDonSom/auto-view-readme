# Auto-View-Readme

Auto View Readme provides commands and default keybindings for automatically opening whatever readme file is in the current directory, or (with your permission) whatever readme is in the nearest higher directory.

## Features

### Provides these commands with default keybindings

#### Auto-View-Readme: View
**`auto-view-readme.view`**

`ctrl+shift+r ctrl+shift+d`

_Open the markdown preview of the readme file._

---
#### Auto-View-Readme: Open
**`auto-view-readme.open`**

`ctrl+shift+r ctrl+shift+o`

_Open the readme file in editor mode._

---
#### Auto-View-Readme: Open with preview
**`auto-view-readme.openWithPreview`**

`ctrl+shift+r ctrl+shift+p`

_Open the readme in an editor with the preview to the side._

---
## Requirements

VS Code `^1.50`

## Known Issues

The method of opening _only a markdown preview_ this extension uses is very hacked together.

You might see it open the readme file, then open the preview, then close the readme file, depending on the capability of your machine.

## Release Notes

### 0.0.4 
- Ask if you want to search the next higher directory if no readme found
- Provide some default keybindings

### 0.0.3
- Show error message if no readme found

### 0.0.2
- Throw exception if no readme found

### 0.0.1 Initial release
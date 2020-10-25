# auto-view-readme README

Auto View Readme provides commands for automatically opening whatever readme.md file is in the current directory.

## Features

### `Auto View Readme: View`
Opens the markdown preview of the readme file.

### `Auto View Readme: Open`
Opens the readme file in editor mode.

### `Auto View Readme: Open with preview`
Opens the readme in an editor with the preview to the side.

## Requirements

VS Code `^1.50`

## Known Issues

Currently, this extension only opens from the _current_ directory. Ideally, it would open the closest readme file up the directory tree.

The method of opening _only a markdown preview_ this extension uses is very hacked together.

## Release Notes

### 0.0.2 Throw exception if no readme found

### 0.0.1 Initial release
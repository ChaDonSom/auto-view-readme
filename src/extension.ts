/* eslint-disable @typescript-eslint/semi */
/* eslint-disable curly */
import * as vscode from 'vscode'
import { currentPath, readmeForPath } from './composables'

export async function activate(context: vscode.ExtensionContext) {

	// Preview the readme file
	let view = vscode.commands.registerCommand('auto-view-readme.view', async () => {
		let current = currentPath()
		if (!current) return console.error("No folder or file open.")

		// Open readme candidate
		let readme = readmeForPath(current)
		if (!readme) return console.error("No readme found in current directory.")
		await vscode.commands.executeCommand('vscode.open', readme)
		/**
		 * Upon getting it installed on code-server:
		 * Command 'Auto-View-Readme: View' resulted in an error 
		 * (Running the contributed command: 'vscode.open' failed. Illegal argument 'resource' - Resource to open)
		 */
		// Show preview
		await vscode.commands.executeCommand('markdown.showPreview')

		// Remove editor for readme candidate
		await new Promise(resolve => setTimeout(resolve, 10))
		await vscode.commands.executeCommand('workbench.action.previousEditor')
		await new Promise(resolve => setTimeout(resolve, 10))
		await vscode.commands.executeCommand('workbench.action.closeActiveEditor')
	})

	// Open the readme file only, no preview
	let open = vscode.commands.registerCommand('auto-view-readme.open', async () => {
		let current = currentPath()
		if (!current) return console.error("No folder or file open.")

		// Open readme candidate
		let readme = readmeForPath(current)
		await vscode.commands.executeCommand('vscode.open', readme)
	})

	// Open the readme file with the preview to the side of the editor
	let openWithPreview = vscode.commands.registerCommand('auto-view-readme.openWithPreview', async () => {
		let current = currentPath()
		if (!current) return console.error("No folder or file open.")

		// Open readme candidate
		let readme = readmeForPath(current)
		await vscode.commands.executeCommand('vscode.open', readme)
		// Show preview to side
		await vscode.commands.executeCommand('markdown.showPreviewToSide')
	})

	context.subscriptions.push(view, open, openWithPreview)
}

// this method is called when your extension is deactivated
export function deactivate() {

	/**
	 * 
	 * Remove commands here
	 * Do we need to?
	 * 
	 */

}

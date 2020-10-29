/* eslint-disable @typescript-eslint/semi */
/* eslint-disable curly */
import { window, commands, ExtensionContext } from 'vscode'
import { currentPath, readmeForPath, recursivelyFindReadme } from './composables'

export async function activate(context: ExtensionContext) {

	// Preview the readme file
	let view = commands.registerCommand('auto-view-readme.view', async () => {
		let current = currentPath()
		if (!current) return window.showErrorMessage("No folder or file open.")

		// Open readme candidate
		let readme = await recursivelyFindReadme(current)
		if (!readme) return window.showErrorMessage("No readme found.")

		await commands.executeCommand('vscode.open', readme)
		
		// Show preview
		await commands.executeCommand('markdown.showPreview')

		// Remove editor for readme candidate
		await new Promise(resolve => setTimeout(resolve, 10))
		await commands.executeCommand('workbench.action.previousEditor')
		await new Promise(resolve => setTimeout(resolve, 10))
		await commands.executeCommand('workbench.action.closeActiveEditor')
	})

	// Open the readme file only, no preview
	let open = commands.registerCommand('auto-view-readme.open', async () => {
		let current = currentPath()
		if (!current) return window.showErrorMessage("No folder or file open.")

		// Open readme candidate
		let readme = await recursivelyFindReadme(current)
		if (!readme) return window.showErrorMessage("No readme found.")

		await commands.executeCommand('vscode.open', readme)
	})

	// Open the readme file with the preview to the side of the editor
	let openWithPreview = commands.registerCommand('auto-view-readme.openWithPreview', async () => {
		let current = currentPath()
		if (!current) return window.showErrorMessage("No folder or file open.")

		// Open readme candidate
		let readme = await recursivelyFindReadme(current)
		if (!readme) return window.showErrorMessage("No readme found.")

		await commands.executeCommand('vscode.open', readme)

		// Show preview to side
		await commands.executeCommand('markdown.showPreviewToSide')
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

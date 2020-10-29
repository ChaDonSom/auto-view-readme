/* eslint-disable @typescript-eslint/semi */
/* eslint-disable curly */
import { window, workspace, Uri } from 'vscode'
import { existsSync } from 'fs'

/**
 * Get the Uri for the readme file in a directory, if it exists
 * 
 * @param path path to check for a readme
 */
export function readmeForPath(path: string): Uri | undefined {
    let readme, result
    let candidates: Array<string> = ['readme.md', 'README.md']
    for (let candidate of candidates) {
        if (readme === undefined) {
            result = `${path}/${candidate}`
            if (existsSync(result)) readme = Uri.file(result)
        }
    }

    return readme
}

/**
 * Determine the current path, from either the `activeTextEditor`, or the `workspaceFolder`
 */
export function currentPath(): string | undefined {
    let current = window.activeTextEditor?.document?.fileName

    if (current) current = current.split('/').slice(0, -1).join('/')
    else current = workspace.workspaceFolders?.[0]?.uri?.fsPath

    return current
}

/**
 * Get the parent path of a path (move up)
 * @param path path to get the parent path of
 */
export function parentPath(path: string): string {
    return path.split('/').slice(0, -1).join('/')
}
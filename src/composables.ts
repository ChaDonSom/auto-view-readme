/* eslint-disable @typescript-eslint/semi */
/* eslint-disable curly */
import { window, workspace, Uri } from 'vscode'
import { existsSync } from 'fs'

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

export function currentPath(): string | undefined {
    let current = window.activeTextEditor?.document?.fileName

    if (current) current = current.split('/').slice(0, -1).join('/')
    else current = workspace.workspaceFolders?.[0]?.uri?.fsPath

    return current
}
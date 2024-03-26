import { fileURLToPath } from 'url';
import {resolve} from 'path'

export const filename = fileURLToPath(import.meta.url)
export const viewsDir = resolve(filename, '../../../src/views-test')
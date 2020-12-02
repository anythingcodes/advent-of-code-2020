import {readFileSync} from "fs";
import {join} from 'path';

export const getFile = (...path: string[]) => readFileSync(join(...path), 'utf8').trim();

import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

//console.log(dirname(fileURLToPath(import.meta.url)));
//console.log(require.resolve('./dist/openapi.json')); 
	
export const spec = JSON.parse(
	readFileSync(resolve('./dist/openapi.json'), 'utf8');
	//readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), './dist/openapi.json'), 'utf8')
);

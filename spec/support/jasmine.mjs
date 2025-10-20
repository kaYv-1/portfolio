import Jasmine from 'jasmine';
import { register } from '@babel/register';
import path from 'path';
import { fileURLToPath } from 'url';


register({
  extensions: ['.js', '.jsx'],
  ignore: [/node_modules/],
});

const jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    '**/*[sS]pec.jsx'
  ],
  helpers: [],
  random: false
});

jasmine.execute();

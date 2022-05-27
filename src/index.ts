import { rules } from './rules'
import testConfig from './configs/js-with-ts'
export = {
  rules,
  configs: {
    'js-with-ts': testConfig,
  }
}

const cond = true as unknown;
cond && console.log('true');
function doSomething() {


  console.error('Nothing to do!'); return;


  console.log('Doing a thing...');
}


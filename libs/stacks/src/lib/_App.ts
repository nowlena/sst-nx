import { App } from '@serverless-stack/resources';
import { Api } from './Api';
import { Database } from './Database';

export function _App(app: App) {
  app.setDefaultFunctionProps({
    runtime: 'nodejs16.x',
    srcPath: 'libs/services/src/lib',
    bundle: {
      format: 'esm',
    },
  });

  app.stack(Database).stack(Api);
}

import { RDS, StackContext } from '@serverless-stack/resources';

export function Database({ stack }: StackContext) {
  const rds = new RDS(stack, 'rds', {
    engine: 'postgresql10.14',
    migrations: 'libs/services/src/lib/migrations',
    types: 'libs/services/src/lib/core/sql.generated.ts',
    defaultDatabaseName: 'main',
  });

  return rds;
}

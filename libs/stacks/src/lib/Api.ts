import {
  StackContext,
  use,
  Api as ApiGateway,
} from '@serverless-stack/resources';
import { Database } from './Database';

export function Api({ stack }: StackContext) {
  const db = use(Database);

  const api = new ApiGateway(stack, 'api', {
    defaults: {
      function: {
        permissions: [db],
        environment: {
          RDS_SECRET_ARN: db.secretArn,
          RDS_ARN: db.clusterArn,
          RDS_DATABASE: db.defaultDatabaseName,
        },
      },
    },
    routes: {
      'POST /graphql': {
        type: 'pothos',
        function: {
          handler: 'functions/graphql/graphql.handler',
        },
        schema: 'libs/services/src/lib/functions/graphql/schema.ts',
        output: 'libs/graphql/src/lib/schema.graphql',
        commands: [
          'npx genql --output ./libs/graphql/src/lib/genql --schema ./libs/graphql/src/lib/schema.graphql --esm',
        ],
      },
    },
  });

  stack.addOutputs({
    API_URL: api.url,
  });

  return api;
}

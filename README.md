# SST NX Example

A simple example using [SST](https://sst.dev) in a [NX](https://nx.dev) monorepo.

## Development

```bash
git clone git@github.com:nowlena/sst-nx.git
cd sst-nx
npm install
npx sst start
# in another terminal run your app (note: no app is included in this repo)
npx nx serve APP_NAME
```

## Additional Notes

### Frontend App

No frontend application was included in this repo.

Note that once you do add your frontend app you'll be able to reference the generated types via `import { Article } from "@sst-nx/graphql"`

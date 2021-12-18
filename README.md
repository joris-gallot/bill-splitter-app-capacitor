# Bill Splitter App - Test Capacitor

App design from: https://dribbble.com/shots/14817879-Bill-Splitter-App

## Install dependencies

```bash
npm ci
```

## Run dev server

```bash
npm run dev
```

## Capacitor config

To run the app on ios you need to create the Capacitor config file (`capacitor.config.ts`)

```ts
import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "joris.gallot",
  appName: "bill-splitter-app-capacitor",
  webDir: "dist",
  bundledWebRuntime: false,
};

export default config;
```

### Hot reload

For hot reload you need to add this to the `capacitor.config.ts` file

```ts
const config: CapacitorConfig = {
  server: {
    url: "http://your-ip:3000",
    cleartext: true,
  },
  ...
};

export default config;
```

Next, run `npx cap copy` to copy the updated Capacitor config into all native projects.

## Run ios

```bash
npx cap open ios
```

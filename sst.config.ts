import { SSTConfig } from "sst";

import { ApiStack } from "./stacks/ApiStack";
import { AuthStack } from "./stacks/AuthStack";
import { FrontendStack } from "./stacks/FrontendStack";
import { StorageStack } from "./stacks/StorageStack";

export default {
  config(_input) {
    return {
      name: "webregsched",
      region: "us-west-1",
    };
  },
  stacks(app) {
    app
      .stack(StorageStack)
      .stack(ApiStack)
      .stack(AuthStack)
      .stack(FrontendStack);
  },
} satisfies SSTConfig;

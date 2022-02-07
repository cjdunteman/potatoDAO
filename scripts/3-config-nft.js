import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xDdcF89B777186D779853Be3980Cc91ec390Ea50A",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Potato Head",
        description: "This NFT will give you access to PotatoDAO!",
        image: readFileSync("scripts/assets/potatohead.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
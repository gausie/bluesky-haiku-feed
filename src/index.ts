import dotenv from "dotenv";
import FeedGenerator from "./server";

const run = async () => {
  dotenv.config();
  const hostname = maybeStr(process.env.FEEDGEN_HOSTNAME) ?? "example.com";
  const serviceDid =
    maybeStr(process.env.FEEDGEN_SERVICE_DID) ?? `did:web:${hostname}`;
  const server = FeedGenerator.create({
    port: maybeInt(process.env.FEEDGEN_PORT) ?? 3000,
    postgresConnectionString:
      maybeStr(process.env.FEEDGEN_POSTGRES_CONNECTION_STRING) ??
      "postgresql://localhost:5432/bluesky_haiku",
    subscriptionEndpoint:
      maybeStr(process.env.FEEDGEN_SUBSCRIPTION_ENDPOINT) ??
      "wss://bsky.network",
    publisherDid:
      maybeStr(process.env.FEEDGEN_PUBLISHER_DID) ?? "did:example:alice",
    subscriptionReconnectDelay:
      maybeInt(process.env.FEEDGEN_SUBSCRIPTION_RECONNECT_DELAY) ?? 3000,
    hostname,
    serviceDid,
  });
  await server.start();
  console.log(
    `🤖 running feed generator at http://localhost:${server.cfg.port}`,
  );
};

const maybeStr = (val?: string) => {
  if (!val) return undefined;
  return val;
};

const maybeInt = (val?: string) => {
  if (!val) return undefined;
  const int = parseInt(val, 10);
  if (isNaN(int)) return undefined;
  return int;
};

run();

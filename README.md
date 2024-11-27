# Bluesky Haiku Feed Generator

This generates a feed for bluesky containing all posts that are haiku, intentionally or otherwise.

### Deploying

Your feed will need to be accessible at the value supplied to the `FEEDGEN_HOSTNAME` environment variable.

The service must be set up to respond to HTTPS queries over port 443.

### Publishing

To publish your feed, go to the script at `scripts/publishFeedGen.ts` and fill in the variables at the top. Examples are included, and some are optional. To publish your feed generator, simply run `yarn publishFeed`.

To update your feed's display data (name, avatar, description, etc.), just update the relevant variables and re-run the script.

After successfully running the script, you should be able to see your feed from within the app, as well as share it by embedding a link in a post (similar to a quote post).

## Running the Server

Install dependencies with `yarn` and then run the server with `yarn start`. This will start the server on port 3000, or what's defined in `.env`.

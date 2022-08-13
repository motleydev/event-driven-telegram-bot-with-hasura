# Event Driven Telegram Bots with Hasura

The Telegram platform provides an intuitive ecosystem of APIs, Apps, and Services to create bots that interact with their large user set. Over half a billion users at the time of this writing, and as security and privacy concerns grow, that number is only likely to grow thanks to it's name share, history in the industry, and ease of adoption.

An indirect goal of this demo is to help users think beyond the website and into which other platforms and mthods of communicatin Hasura can support. In this context, a chat bot with a simple no-code backed aggregator.

## The Idea: S(c)hity Fix

SchityFix is a civic involvement platform that allows citizens to capture photos, location information, and text to report areas in their local city that need improving. For backend users, this shows a list of the reports as well as their location on the map.

## The Stack

Our application is designed to run off-line for education purposes, including using an offline version of the Telgram Bot API which routes our traffice and events.

_Our services are:_

- Appsmith for a Low-code viewer
- Caddy to host our images
- Telegram Bot API to let us work local
- Hasura GraphQL Engine for connecting the data parts together

## The Data Model

Our data model can be found at [DBDiagram.io](https://dbdiagram.io/d/62f65b1fc2d9cf52fa985df9)

It's rough shape is the following Dbx syntax.

```
Table user {
  id integer [pk, increment]
  name text [not null]
  t_id text [not null, unique]
}

Table report {
  id integer [pk, increment]
  location geometry(point)
  image_url text
  t_update_id text [not null, unique]
  t_user_id text [not null]
  t_message_id text [pk]
}

Ref: report.t_user_id > user.t_id
```

## Language

As with the rest of this stack, the different services are mostly language agnostic, but for the viewing purposes here, we've used TypeScript with GraphQL Codegen and the Next.Js framework. Any one of these can be swapped out for a different stack.

## Running the project

A few important steps need to be followed for the project to work. First, you'll need to provide your won relevant environment variables in the root `.env` and the `www/.env.local` directories. If you want to use Appsmith with the map feature, you'll also need your own Google Maps Token available under `/stacks/configuration/docker.env`.

_.env_

```
# Available from the Botfather process and signing up for a developer account.
TELEGRAM_APP_ID=
TELEGRAM_APP_HASH=
TELEGRAM_BOT=
```

_www/.env.local_

```
# Same Telegram Bot from above.
TELEGRAM_BOT=
HASURA_ADMIN_SECRET="myadminsecretkey"
HASURA_PROJECT_ENDPOINT="http://localhost:8080/v1/graphql"
```

Steps:

1. Change Next.JS port to one that Telegram can send events to. `"dev": "next dev -p 443",`
2. Run the containers and start the web server for Next.Js.
3. Add custom commands to bot.
   ```
   commands:
   report - Report something that needs fixing in the Schity!
   status - Ask us about something you've already reported.
   thanks - Let us know if you're happy, it means a lot!
   ```
4. Unregister your bot with Telegram.
   `https://api.telegram.org/bot<Your Bot ID>/logOut`
5. Add the Webhook address to your Telegram Bot.
   `http://localhost:8081/bot<Your Bot ID>/setWebhook?url=http://host.docker.internal:443/api/telegram`

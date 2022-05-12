# String chopper

A small web app and API that takes a string and returns every third letter in
the string.

See API documentation at <https://string-chop.deta.dev/docs>.

A small web app is available at <https://string-chop.deta.dev> to test the POST
method.

Because I'm testing out deployment with <https://deta.sh>, responses can be a
little slow (a little over half a second), so please be patient if you're
visiting the project!

## Development

I'm currently using [FastAPI](https://fastapi.tiangolo.com/) for the API.

The web app uses React, Axios, and Bootstrap.

## Deployment

Using <https://deta.sh>.  For testing purposes, deployment has been
straightforward, especially with their command line tool.  Responses are a
little slow (>500 ms), but fast enough for testing this app.

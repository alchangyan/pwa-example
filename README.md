# PWA example

## useful information

`beforeinstallprompt` browse event

### requirements to show `install` button in the browser

- the web app is not already installed
- meets a user engagement heuristic
- be served over HTTPS
- includes a web app manifest that includes:
  - `short_name` or `name`
  - `icons` - must include a 192px and a 512px icon
  - `start_url`
  - `display` - must be one of `fullscreen`, `standalone`, or `minimal-ui`
  - `prefer_related_applications` must not be `present`, or be `false`
- registers a `service worker` with a fetch handler

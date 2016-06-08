# Coder Forge Website
Beta version. To view the live site goto [https://coder-forge.github.io](https://coder-forge.github.io)

This beta version can be viewed at: [http://164.132.58.15:3000](http://164.132.58.15:3000)

You can contact us at [mailto:coderforge.dublin@gmail.com](coderforge.dublin@gmail.com)

# Usage

Feel free to download this code and help to work on the site. You can view and
report issues here: [https://github.com/coder-forge/website/issues](https://github.com/coder-forge/website/issues)

## Docker

The preferred method is to use docker. Instructions for installing docker can be
found [here](https://docs.docker.com/engine/installation/). Once docker is
installed you can run the site locally with the following commands:
```bash
git clone https://github.com/coder-forge/website
cd website
docker-compose up
```

Or you can run the image from the Coder Forge account at [docker hub](https://hub.docker.com/r/coderforge/website/)
```bash
docker pull coderforge/website
docker run coderforge/website
```

## Manually

The site can be run as a MeteorJS app without Docker. Installation instructions for MeteorJS
can be found [here](https://www.meteor.com/install)
```bash
git clone https://github.com/coder-forge/website
cd website/app
meteor
```

## Testing
From project root run:
```bash
npm test
```

# Status

The build status for the website can be found on CircleCI [https://circleci.com/gh/coder-forge/website](https://circleci.com/gh/coder-forge/website)

License: [MIT](https://opensource.org/licenses/MIT)

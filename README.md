# to host a godot game

1. copy the exported web game files from godot into the folder `/public` in the root of this git repo

then:

1. build the docker image with `docker build -t my-cool-game .`
1. run the docker image with `docker run --rm -it -p 8080:8080 my-cool-game`

alternatively (if you use fly.io):

1. change the app name in the fly.toml and run `fly launch`

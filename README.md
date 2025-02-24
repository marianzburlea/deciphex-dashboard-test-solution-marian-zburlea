# deciphex-test

## Install bun js

### for macOS, Linux and WSL

```
curl -fsSL https://bun.sh/install | bash -s "bun-v1.2.3"
```

or

```
brew install oven-sh/bun/bun
```

or

```
npm install -g bun
```

### for Windows

```
powershell -c "irm bun.sh/install.ps1|iex"
```

or

```
npm install -g bun
```

More info about how to install **Bun** at [Installation | Bun Docs](https://bun.sh/docs/installation#windows)

## Run the solution

After you've cloned the project and changed into the path where you've cloned it, run `bun i` to install dependencies, then start the server and run the local dev:

```
bun i
```

```
bun src/server.ts
```

```
bun dev
```

Them open the solution in a browser:

[http://localhost:5173/](http://localhost:5173/)

## Notes for the architect

- The solution is making use of **TypeScript** and while I developed it I caught lots and lots of bugs early, and sped up the development with autocomplete and clear understanding when shifting focus from one code file/location to another.
- The app allows users to navigate using the keyboard, which increases accessibility and inclusion

## Notes for the developer

- Fixed string compare in the API call
- in API server, I've renamed `ids` to `idList`, as a list can contain 0, 1 or more items, while `ids` is the plural of `id`, and always suggests that it should be 0 or 2 ore more than 2, never 1. It's incorrect to say `I have one ids`, it is correct to say `I have one id`. I shifted the focus of a collection that counts how many are present, to a collection/list of entities of type `id`.
- the folder structure is feature based, and only reusable types or functions are separated, the rest of the code is found it the folder of the component to minimise hunting down files
- The icons have been bundled in a custom font, faster loading, easy to scale and apply colour, and they work even in realy old browsers

## Notes for the designer

- two of the icons were using strokes instead of fill paths, and those don't scale proportionally
- drop shadows are only OK when it's a must from the client (assuming that the drop in performance was communicated and the client chose to eat the bullet and specifically wants a less performant UI), otherwise they can be replaced by smart borders or shapes, which greately increase the performance in rendering assets on the screen
- height and width, when specified, should always follow a multiple of 4 value, so height 27 could be 28. Same goes for margins and paddings, with the exception of elements that are meant to be very close, where a value of 2 can be used.

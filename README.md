# React Scroll Zoom Effect

<div style="display: flex; gap: 1vw;">
<img src="./assets/icons_max_1.1.gif" width="32%" height="250px"/>
<img src="./assets/icons.gif" width="32%" height="250px"/>
<img src="./assets/list.gif" width="32%" height="250px"/>
</div>

## Make your page more dynamic with scroll effects.

Install:

```
npm install react-scroll-zoom-effect
yarn add react-scroll-zoom-effect
```

How to use:

```
<ZoomScroll>
	<YourComponent />
</ZoomScroll>
```

If you have an image, SVG, etc make sure you contain its size:

```
<div style={{width: "5rem", height: "5rem"}}>
    <ZoomScroll>
        <YourComponent />
    </ZoomScroll>
</div>
```

Example gif 1 uses param max={1.1}\
Example gifs 2 and 3 use no params

## Params

Sway: boolean\
Move in direction of scroll\
Default: false\
Example: Lists, Dividers , masks , gradients

Shrink: boolean\
Shrink instead of zoom\
Default: false
Example: UI regions

Show: boolean\
Toggle zoom effect on/off\
Example: Only show on dark mode\
Default: true

Max/Min: number\
TBD\
Currently # >= 0\
Default: 0\
Notes: Works well with 0~0.5
Ref storybook examples

Scale: number\
TBD\
Default: 100

## Examples

Gradient example from gif above:\

```
<div
    style={{
    marginBottom: "2rem",
    height: "2rem",
    background: "blue",
    width: "100%",
    }}
>
    <ScrollZoom
    scale={200}
    style={{
        height: "2rem",
        background:
        "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 75%,rgba(255,255,255,0) 100%)",
    }}
    ></ScrollZoom>
</div>
```

### To Do List

- [ ] Point CodeSandBox to StoryBook instead of src/index
- [ ] Export type definitions
- [ ] Test Cross Browser Support

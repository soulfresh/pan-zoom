# pan-zoom ![tiny](https://img.shields.io/badge/gzipped-4.8kb-brightgreen.svg) [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

This is a fork of [pan-zoom](https://www.npmjs.com/package/pan-zoom) with bug fixes,
feature updates and a backwards compatible API with the original.

Panning and zooming events for any target.
May come handy for webgl, canvas, svg, images or pure html manipulations.
Handles mobile pinch-zoom, drag and scroll interactions, double tap/click interactions
and provides inertial movement.

See [demo](https://dy.github.io/plot-grid).

[![npm install pan-zoom](https://nodei.co/npm/pan-zoom.png?mini=true)](https://npmjs.org/package/pan-zoom/)

```js
const panzoom = require('pan-zoom');

let unpanzoom = panzoom(
  // Target element to pan/zoom
  document.body,
  // Update callback on guesture updates.
  e => {
    // e contains all the params related to the interaction

    // pan deltas
    e.dx;
    e.dy;

    // zoom delta
    e.dz;

    // coordinates of the center
    e.x;
    e.y;

    // type of interaction: mouse or touch
    e.type;

    // target element event is applied to
    e.target;

    // original element event started from
    e.srcElement;

    // initial coordinates of interaction
    e.x0;
    e.y0;

    // initial coordinates of interaction as a percentage of
    // the target element dimensions (a number between 0-1).
    // This is useful if the demensions of the pan-zoom element
    // change between updates.
    e.px0;
    e.py0;

    requestAnimationFrame(() => {
      // While not a requirement, it is recommended that your
      // code handles UI updates in a `requestAnimationFrame`.
      // Previous versions of this library did this internally
      // but that has been removed to give library users more
      // control over when and how `requestAnimationFrame` is used.
    });
  },
  // Additional configuration options...
  {
    // A callback that will be called when a new guesture starts.
    // It receives the same event object as the update callback above.
    onStart: e => {},

    // A callback that will be called when a guesture ends.
    // It receives the same event object as the update callback above.
    onEnd: e => {},

    // A callback that will be called when a double tap/click gesture
    // occurs. It will also receive the same event object as the
    // update callback. `dz` will always be 0 so that you can determine
    // how double tap events should be treated.
    onDoubleTap: e => {},
  }
);

// you can pause/resume pan or zoom functionality at runtime if you ever need.
unpanzoom.disablePan()
unpanzoom.disableZoom()
unpanzoom.enablePan()
unpanzoom.enableZoom()

// call to completely remove panzoom handler from the target
unpanzoom()
```

See [`test.js`](https://github.com/dy/pan-zoom/blob/master/test.js) for basic use-case.


## Credits

This package puts together high-quality tiny components, so acknowledgment to their authors:

* [impetus](http://npmjs.org/package/impetus) by **[Chris Bateman @chrisbateman](https://github.com/chrisbateman)** handles inertial drag.
* [mouse-wheel](https://github.com/mikolalysenko/mouse-wheel) by **[Mikola Lysenko @mikolalysenko](https://github.com/mikolalysenko/mouse-wheel)** covers cross-browser wheel event.</del>
* [touch-pinch](https://www.npmjs.com/package/touch-pinch) by **[Matt DesLauriers @mattdesl](https://github.com/mattdesl)** handles mobile pinch gestures.
* [touch-position](https://www.npmjs.com/package/touch-position) by **[Matt DesLauriers @mattdesl](https://github.com/mattdesl)** tracks mouse and touch coordinates.

## License

© 2017 Dmitry Yv. MIT License

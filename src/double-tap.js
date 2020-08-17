/**
 * Track double tap gestures.
 */
export default function doubleTap(
  callback,
  target = window,
  options = {},
) {
  let timer;
  let threshold = options.threshold || 500;

  const onClick = (e) => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
      }, threshold);
    } else {
      timer = clearTimeout(timer);
      callback && callback(e);
    }
  };

  target.addEventListener('click', onClick, {passive: true});

  return () => {
    target.removeEventListener('click', onClick, {passive: true});
    return null;
  };
}

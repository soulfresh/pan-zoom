import React from 'react';

// export const Example = React.forwardRef(({children}, ref) =>
//   children()
// );
export function Example({
  children,
}) {
  return children();
}

export const Div = React.forwardRef(({
  children,
  ...rest
}, ref) =>
  <div ref={ref} {...rest}>{ children }</div>
);

export function Logger({
  logs,
  children,
  ...rest
}) {
  const ref = React.useRef();

  React.useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight;
  });

  return (
    <div ref={ref}
      {...rest}
      style={{
        height: '200px',
        border: '2px dashed black',
        overflow: 'auto',
        fontSize: '.8em',
      }}
    >{ logs.map((l, i) =>
      <div key={i}>Update >
        dx:{l.dx.toFixed(2)}&nbsp;
        dy:{l.dy.toFixed(2)}&nbsp;
        dz:{l.dz.toFixed(2)}&nbsp;
        x0:{l.x0.toFixed(2)}&nbsp;
        y0:{l.y0.toFixed(2)}&nbsp;
        px0:{l.px0.toFixed(2)}&nbsp;
        py0:{l.py0.toFixed(2)}&nbsp;
      </div>
    )}</div>
  );
};

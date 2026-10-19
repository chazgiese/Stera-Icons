import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlyCircleRegularProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyCircleRegular = memo(
  forwardRef<SVGSVGElement, BracketsCurlyCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 7.25c.41 0 .75.34.75.75s-.34.75-.75.75h-.6q-.14.01-.15.14V10c0 .77-.31 1.49-.83 2.01.52.52.83 1.24.83 2v1.1q.01.14.14.15H10c.41 0 .75.34.75.75s-.34.75-.75.75h-.6c-.91 0-1.65-.73-1.65-1.64V14c0-.6-.4-1.12-.96-1.3-.32-.09-.54-.38-.54-.71s.22-.62.54-.72c.57-.17.96-.7.96-1.29V8.9c0-.9.74-1.64 1.64-1.64zM14.6 7.25c.92 0 1.65.74 1.65 1.64V10c0 .6.4 1.12.96 1.3.32.09.54.38.54.71s-.22.62-.54.72c-.57.17-.96.7-.96 1.29v1.1c0 .9-.73 1.64-1.64 1.64H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.6q.14-.01.15-.14V14c0-.77.31-1.49.83-2.01-.52-.52-.83-1.24-.83-2V8.9q-.01-.14-.14-.15H14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsCurlyCircleRegular.displayName = 'BracketsCurlyCircleRegular';

// Triple export pattern
export { BracketsCurlyCircleRegular, BracketsCurlyCircleRegular as BracketsCurlyCircleRegularIcon, BracketsCurlyCircleRegular as SiBracketsCurlyCircleRegular };
export default BracketsCurlyCircleRegular;
export type { BracketsCurlyCircleRegularProps };

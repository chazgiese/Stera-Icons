import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlyCircleFillProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyCircleFill = memo(
  forwardRef<SVGSVGElement, BracketsCurlyCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75M8.9 7.13c-.98 0-1.77.79-1.78 1.76V10c0 .54-.35 1.02-.87 1.17-.37.11-.62.45-.62.84s.25.73.62.84c.52.15.87.63.88 1.17v1.1c0 .97.79 1.76 1.76 1.77h.61c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-.61l-.01-.01V14c0-.77-.3-1.47-.79-2.01.5-.54.78-1.24.79-2V8.87h.62c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm5.6 0c-.48 0-.87.39-.87.87s.39.88.87.88h.62V10c0 .77.3 1.47.79 2.01-.5.54-.79 1.24-.79 2v1.12h-.62c-.48 0-.87.4-.87.88s.39.88.87.88h.6c.98 0 1.77-.8 1.78-1.77V14c0-.54.35-1.02.87-1.17.37-.11.63-.45.63-.84s-.26-.73-.63-.84c-.52-.15-.87-.63-.87-1.17V8.9c0-.97-.8-1.76-1.77-1.77z" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsCurlyCircleFill.displayName = 'BracketsCurlyCircleFill';

// Triple export pattern
export { BracketsCurlyCircleFill, BracketsCurlyCircleFill as BracketsCurlyCircleFillIcon, BracketsCurlyCircleFill as SiBracketsCurlyCircleFill };
export default BracketsCurlyCircleFill;
export type { BracketsCurlyCircleFillProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlySquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlySquareFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlySquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13 2.25c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v2c0 1.39 0 2.47-.07 3.34-.07.88-.22 1.61-.56 2.27-.55 1.08-1.43 1.96-2.51 2.51-.66.34-1.39.49-2.27.56-.87.07-1.95.07-3.34.07h-2c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-2c0-1.39 0-2.47.07-3.34.07-.88.22-1.61.56-2.27.55-1.08 1.43-1.96 2.51-2.51.66-.34 1.39-.49 2.27-.56.87-.07 1.95-.07 3.34-.07zM8.9 7.13c-.98 0-1.77.79-1.78 1.76V10c0 .54-.35 1.02-.87 1.17-.37.11-.62.45-.62.84s.25.73.62.84c.52.15.87.63.88 1.17v1.1c0 .97.79 1.76 1.76 1.77h.61c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-.61l-.01-.01V14c0-.77-.3-1.47-.79-2.01.5-.54.78-1.24.79-2V8.87h.62c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm5.6 0c-.48 0-.87.39-.87.87s.39.88.87.88h.62V10c0 .77.3 1.47.79 2.01-.5.54-.79 1.24-.79 2v1.12h-.62c-.48 0-.87.4-.87.88s.39.88.87.88h.6c.98 0 1.77-.8 1.78-1.77V14c0-.54.35-1.02.87-1.17.37-.11.63-.45.63-.84s-.26-.73-.63-.84c-.52-.15-.87-.63-.87-1.17V8.9c0-.97-.8-1.76-1.77-1.77z" clipRule="evenodd" opacity={.4} />
        <path d="M9.5 7.13c.48 0 .88.39.88.87s-.4.88-.88.88h-.62V10c0 .77-.3 1.47-.79 2.01.5.54.78 1.24.79 2v1.12h.62c.48 0 .88.4.88.88s-.4.88-.88.88h-.6c-.98 0-1.77-.8-1.78-1.77V14c0-.54-.35-1.02-.87-1.17-.37-.11-.62-.45-.62-.84s.25-.73.62-.84c.52-.15.87-.63.88-1.17V8.9c0-.97.79-1.76 1.76-1.77zM15.1 7.13c.98 0 1.77.79 1.78 1.76V10c0 .54.35 1.02.87 1.17.37.11.63.45.63.84s-.26.73-.63.84c-.52.15-.87.63-.87 1.17v1.1c0 .97-.8 1.76-1.77 1.77h-.61c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h.61l.01-.01V14c0-.77.3-1.47.79-2.01-.5-.54-.79-1.24-.79-2V8.87h-.62c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

BracketsCurlySquareFillDuotone.displayName = 'BracketsCurlySquareFillDuotone';

// Triple export pattern
export { BracketsCurlySquareFillDuotone, BracketsCurlySquareFillDuotone as BracketsCurlySquareFillDuotoneIcon, BracketsCurlySquareFillDuotone as SiBracketsCurlySquareFillDuotone };
export default BracketsCurlySquareFillDuotone;
export type { BracketsCurlySquareFillDuotoneProps };

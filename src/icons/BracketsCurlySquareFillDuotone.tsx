import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlySquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlySquareFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlySquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-square-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm-3.6 4.5c-.98 0-1.77.79-1.78 1.76V10c0 .54-.35 1.02-.87 1.17a.88.88 0 0 0 0 1.68c.52.15.87.63.88 1.17v1.1c0 .97.79 1.76 1.76 1.77h.61a.88.88 0 0 0 0-1.75h-.61l-.01-.01V14c0-.77-.3-1.47-.79-2.01.5-.54.78-1.24.79-2V8.87h.62a.87.87 0 1 0 0-1.76zm5.6 0a.88.88 0 0 0 0 1.75h.62V10c0 .77.3 1.47.79 2.01-.5.54-.79 1.24-.79 2v1.12h-.62a.88.88 0 0 0 0 1.76h.6c.98 0 1.77-.8 1.78-1.77V14c0-.54.35-1.02.87-1.17a.88.88 0 0 0 0-1.68 1.2 1.2 0 0 1-.87-1.17V8.9c0-.97-.8-1.76-1.77-1.77z" clipRule="evenodd" opacity={.4} />
        <path d="M9.5 7.13a.87.87 0 1 1 0 1.75h-.62V10c0 .77-.3 1.47-.79 2.01.5.54.78 1.24.79 2v1.12h.62a.88.88 0 0 1 0 1.76h-.6c-.98 0-1.77-.8-1.78-1.77V14c0-.54-.35-1.02-.87-1.17a.88.88 0 0 1 0-1.68c.52-.15.87-.63.88-1.17V8.9c0-.97.79-1.76 1.76-1.77zM15.1 7.13c.98 0 1.77.79 1.78 1.76V10c0 .54.35 1.02.87 1.17a.88.88 0 0 1 0 1.68c-.52.15-.87.63-.87 1.17v1.1c0 .97-.8 1.76-1.77 1.77h-.61a.88.88 0 0 1 0-1.75h.61l.01-.01V14c0-.77.3-1.47.79-2.01a3 3 0 0 1-.79-2V8.87h-.62a.88.88 0 0 1 0-1.76z" />
    </IconBase>
  ))
);

BracketsCurlySquareFillDuotone.displayName = 'BracketsCurlySquareFillDuotone';

// Triple export pattern (lucide-react style)
export { BracketsCurlySquareFillDuotone, BracketsCurlySquareFillDuotone as BracketsCurlySquareFillDuotoneIcon, BracketsCurlySquareFillDuotone as SiBracketsCurlySquareFillDuotone };
export default BracketsCurlySquareFillDuotone;
export type { BracketsCurlySquareFillDuotoneProps };

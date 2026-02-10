import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlySquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlySquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlySquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-square-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zm-3.2 2c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22C5 8.47 5 9.26 5 10.4v3.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h3.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28a3 3 0 0 0 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55v-3.2c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28C15.53 5 14.74 5 13.6 5z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M10 7a1 1 0 1 1 0 2h-.5v1a3 3 0 0 1-.74 2c.46.55.74 1.25.74 2v1h.5a1 1 0 1 1 0 2h-.6a1.9 1.9 0 0 1-1.9-1.9V14c0-.48-.32-.9-.78-1.04a1 1 0 0 1 0-1.92c.46-.14.78-.56.78-1.05V8.9C7.5 7.85 8.35 7 9.4 7zM14.6 7c1.05 0 1.9.85 1.9 1.9V10c0 .48.32.9.78 1.04a1 1 0 0 1 0 1.92A1.1 1.1 0 0 0 16.5 14v1.1A1.9 1.9 0 0 1 14.6 17H14a1 1 0 1 1 0-2h.5v-1c0-.75.28-1.45.74-2a3 3 0 0 1-.74-2V9H14a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

BracketsCurlySquareBoldDuotone.displayName = 'BracketsCurlySquareBoldDuotone';

// Triple export pattern (lucide-react style)
export { BracketsCurlySquareBoldDuotone, BracketsCurlySquareBoldDuotone as BracketsCurlySquareBoldDuotoneIcon, BracketsCurlySquareBoldDuotone as SiBracketsCurlySquareBoldDuotone };
export default BracketsCurlySquareBoldDuotone;
export type { BracketsCurlySquareBoldDuotoneProps };

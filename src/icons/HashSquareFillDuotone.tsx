import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, HashSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-square-fill-duotone" {...props}>
      <path d="M13.13 10.88v2.24h-2.26v-2.24z" opacity={0.4} />
        <path fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7a5 5 0 0 1-.48 1.97 5 5 0 0 1-2.19 2.19c-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zm.4 3.63c-.48 0-.87.39-.87.87v1.63h-2.26V7.5a.88.88 0 0 0-1.74 0v1.63H7.5a.87.87 0 1 0 0 1.74h1.63v2.26H7.5a.88.88 0 0 0 0 1.74h1.63v1.63a.88.88 0 0 0 1.74 0v-1.62h2.26v1.62a.88.88 0 0 0 1.74 0v-1.62h1.63a.88.88 0 0 0 0-1.76h-1.62v-2.24h1.62a.87.87 0 1 0 0-1.76h-1.62V7.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M14 6.63c.48 0 .88.39.88.87v1.63h1.62a.88.88 0 0 1 0 1.74h-1.62v2.26h1.62a.88.88 0 0 1 0 1.74h-1.62v1.63a.88.88 0 0 1-1.76 0v-1.62h-2.24v1.62a.88.88 0 0 1-1.76 0v-1.62H7.5a.88.88 0 0 1 0-1.76h1.63v-2.24H7.5a.88.88 0 0 1 0-1.76h1.63V7.5a.88.88 0 0 1 1.74 0v1.63h2.26V7.5c0-.48.39-.87.87-.87m-3.12 6.5h2.24v-2.26h-2.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashSquareFillDuotone.displayName = 'HashSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { HashSquareFillDuotone, HashSquareFillDuotone as HashSquareFillDuotoneIcon, HashSquareFillDuotone as SiHashSquareFillDuotone };
export default HashSquareFillDuotone;
export type { HashSquareFillDuotoneProps };

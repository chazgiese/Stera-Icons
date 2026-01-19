import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HashSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, HashSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hash-square-fill-duotone" {...props}>
      <path d="M13 11v2h-2v-2z" opacity={0.4} />
        <path fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm1 4a1 1 0 0 0-1 1v2h-2V7a1 1 0 1 0-2 0v2H7a1 1 0 0 0 0 2h2v2H7a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2h2a1 1 0 1 0 0-2h-2V7a1 1 0 0 0-1-1" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14 6a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2v2a1 1 0 1 1-2 0v-2H7a1 1 0 1 1 0-2h2v-2H7a1 1 0 1 1 0-2h2V7a1 1 0 0 1 2 0v2h2V7a1 1 0 0 1 1-1m-3 7h2v-2h-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashSquareFillDuotone.displayName = 'HashSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { HashSquareFillDuotone, HashSquareFillDuotone as HashSquareFillDuotoneIcon, HashSquareFillDuotone as SiHashSquareFillDuotone };
export default HashSquareFillDuotone;
export type { HashSquareFillDuotoneProps };

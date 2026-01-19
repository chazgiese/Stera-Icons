import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PlusSquareFillProps = Omit<IconBaseProps, 'children'>;

const PlusSquareFill = memo(
  forwardRef<SVGSVGElement, PlusSquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="plus-square-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-1 4a1 1 0 0 0-1 1v4H7a1 1 0 0 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

PlusSquareFill.displayName = 'PlusSquareFill';

// Triple export pattern (lucide-react style)
export { PlusSquareFill, PlusSquareFill as PlusSquareFillIcon, PlusSquareFill as SiPlusSquareFill };
export type { PlusSquareFillProps };

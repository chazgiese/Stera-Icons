import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowSquareUpFillProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareUpFill = memo(
  forwardRef<SVGSVGElement, ArrowSquareUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-up-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 22q2.05.02 3.37-.07c.9-.07 1.65-.23 2.35-.58a6 6 0 0 0 2.63-2.63c.35-.7.5-1.46.58-2.35q.09-1.32.07-3.37v-2q.02-2.05-.07-3.37a6 6 0 0 0-.58-2.35 6 6 0 0 0-2.63-2.63 6 6 0 0 0-2.35-.58Q15.05 1.98 13 2h-2q-2.05-.02-3.37.07c-.9.07-1.65.23-2.35.58a6 6 0 0 0-2.63 2.63c-.35.7-.5 1.46-.58 2.35Q1.98 8.95 2 11v2q-.02 2.05.07 3.37c.07.9.23 1.65.58 2.35a6 6 0 0 0 2.63 2.63c.7.35 1.46.5 2.35.58q1.32.09 3.37.07zm-1-4a1 1 0 0 1-1-1V9.41l-3.3 3.3a1 1 0 1 1-1.4-1.42l5-5a1 1 0 0 1 1.4 0l5 5a1 1 0 1 1-1.4 1.42L13 9.4V17a1 1 0 0 1-1 1" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowSquareUpFill.displayName = 'ArrowSquareUpFill';

// Triple export pattern (lucide-react style)
export { ArrowSquareUpFill, ArrowSquareUpFill as ArrowSquareUpFillIcon, ArrowSquareUpFill as SiArrowSquareUpFill };
export type { ArrowSquareUpFillProps };

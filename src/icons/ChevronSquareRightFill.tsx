import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronSquareRightFillProps = Omit<IconBaseProps, 'children'>;

const ChevronSquareRightFill = memo(
  forwardRef<SVGSVGElement, ChevronSquareRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-square-right-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-1.8 4.8a1 1 0 1 0-1.4 1.4l3.79 3.8-3.8 3.8a1 1 0 1 0 1.42 1.4l4.5-4.5a1 1 0 0 0 0-1.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronSquareRightFill.displayName = 'ChevronSquareRightFill';

// Triple export pattern (lucide-react style)
export { ChevronSquareRightFill, ChevronSquareRightFill as ChevronSquareRightFillIcon, ChevronSquareRightFill as SiChevronSquareRightFill };
export type { ChevronSquareRightFillProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronSquareDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronSquareDownFill = memo(
  forwardRef<SVGSVGElement, ChevronSquareDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-square-down-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm4.2 7.3a1 1 0 0 0-1.4 0L12 13.08l-3.8-3.8a1 1 0 0 0-1.4 1.42l4.5 4.5a1 1 0 0 0 1.4 0l4.5-4.5a1 1 0 0 0 0-1.42" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronSquareDownFill.displayName = 'ChevronSquareDownFill';

// Triple export pattern (lucide-react style)
export { ChevronSquareDownFill, ChevronSquareDownFill as ChevronSquareDownFillIcon, ChevronSquareDownFill as SiChevronSquareDownFill };
export default ChevronSquareDownFill;
export type { ChevronSquareDownFillProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreSquareVFillProps = Omit<IconBaseProps, 'children'>;

const MoreSquareVFill = memo(
  forwardRef<SVGSVGElement, MoreSquareVFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-square-v-fill" {...props}>
      <path fillRule="evenodd" d="M12.5 2.5q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v1q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-1q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35q-.09-1.32-.07-3.37v-1q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58q1.32-.09 3.37-.07zM12 14.63a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.75m0-4a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74m0-4a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreSquareVFill.displayName = 'MoreSquareVFill';

// Triple export pattern (lucide-react style)
export { MoreSquareVFill, MoreSquareVFill as MoreSquareVFillIcon, MoreSquareVFill as SiMoreSquareVFill };
export default MoreSquareVFill;
export type { MoreSquareVFillProps };

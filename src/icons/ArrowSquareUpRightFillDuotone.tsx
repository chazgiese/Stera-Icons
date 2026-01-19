import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowSquareUpRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareUpRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowSquareUpRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-up-right-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zM9 7a1 1 0 0 0 0 2h4.59l-6.3 6.3a1 1 0 1 0 1.42 1.4L15 10.42V15a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.3 15.3a1 1 0 1 0 1.4 1.4l6.3-6.29V15a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1H9a1 1 0 1 0 0 2h4.59z" />
    </IconBase>
  ))
);

ArrowSquareUpRightFillDuotone.displayName = 'ArrowSquareUpRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowSquareUpRightFillDuotone, ArrowSquareUpRightFillDuotone as ArrowSquareUpRightFillDuotoneIcon, ArrowSquareUpRightFillDuotone as SiArrowSquareUpRightFillDuotone };
export default ArrowSquareUpRightFillDuotone;
export type { ArrowSquareUpRightFillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowSquareDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowSquareDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-square-down-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13 2q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v2q.02 2.05-.07 3.37c-.07.9-.23 1.65-.58 2.35a6 6 0 0 1-2.63 2.63c-.7.35-1.46.5-2.35.58q-1.32.09-3.37.07h-2q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35Q1.98 15.05 2 13v-2q-.02-2.05.07-3.37c.07-.9.23-1.65.58-2.35a6 6 0 0 1 2.63-2.63c.7-.35 1.46-.5 2.35-.58Q8.95 1.98 11 2zm-1 4a1 1 0 0 0-1 1v7.59l-3.3-3.3a1 1 0 1 0-1.4 1.42l5 5a1 1 0 0 0 1.4 0l5-5a1 1 0 1 0-1.4-1.42L13 14.6V7a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v7.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

ArrowSquareDownFillDuotone.displayName = 'ArrowSquareDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowSquareDownFillDuotone, ArrowSquareDownFillDuotone as ArrowSquareDownFillDuotoneIcon, ArrowSquareDownFillDuotone as SiArrowSquareDownFillDuotone };
export default ArrowSquareDownFillDuotone;
export type { ArrowSquareDownFillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLeftRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRightFill = memo(
  forwardRef<SVGSVGElement, ArrowLeftRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-left-right-fill" {...props}>
      <path fill="currentColor" d="M17.21 6.8c.28-.11.6-.04.82.17l4.5 4.5a.75.75 0 0 1 .1.95l-.1.11-4.5 4.5a.75.75 0 0 1-1.28-.53V13h-9.5v3.5a.75.75 0 0 1-1.28.53l-4.5-4.5-.05-.06a.75.75 0 0 1 .05-1l4.5-4.5a.75.75 0 0 1 1.28.53V11h9.5V7.5c0-.3.18-.58.46-.7" />
    </IconBase>
  ))
);

ArrowLeftRightFill.displayName = 'ArrowLeftRightFill';

// Triple export pattern (lucide-react style)
export { ArrowLeftRightFill, ArrowLeftRightFill as ArrowLeftRightFillIcon, ArrowLeftRightFill as SiArrowLeftRightFill };
export default ArrowLeftRightFill;
export type { ArrowLeftRightFillProps };

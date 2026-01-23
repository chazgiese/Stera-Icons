import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 22.75a10.75 10.75 0 1 1 0-21.5 10.75 10.75 0 0 1 0 21.5M12 18a1 1 0 0 0 1-1V9.41l3.3 3.3a1 1 0 1 0 1.4-1.42l-5-5a1 1 0 0 0-1.4 0l-5 5a1 1 0 1 0 1.4 1.42L11 9.4V17a1 1 0 0 0 1 1" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpFill.displayName = 'ArrowCircleUpFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpFill, ArrowCircleUpFill as ArrowCircleUpFillIcon, ArrowCircleUpFill as SiArrowCircleUpFill };
export default ArrowCircleUpFill;
export type { ArrowCircleUpFillProps };

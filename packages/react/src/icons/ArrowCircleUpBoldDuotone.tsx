import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 23a11 11 0 1 1 0-22 11 11 0 0 1 0 22m0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 18a1 1 0 0 1-1-1V9.41l-3.3 3.3a1 1 0 1 1-1.4-1.42l5-5a1 1 0 0 1 1.4 0l5 5a1 1 0 1 1-1.4 1.42L13 9.4V17a1 1 0 0 1-1 1" />
    </IconBase>
  ))
);

ArrowCircleUpBoldDuotone.displayName = 'ArrowCircleUpBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpBoldDuotone, ArrowCircleUpBoldDuotone as ArrowCircleUpBoldDuotoneIcon, ArrowCircleUpBoldDuotone as SiArrowCircleUpBoldDuotone };
export type { ArrowCircleUpBoldDuotoneProps };

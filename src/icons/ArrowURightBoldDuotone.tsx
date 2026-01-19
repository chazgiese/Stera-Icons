import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowURightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right-bold-duotone" {...props}>
      <path fill="currentColor" d="M16 3a1 1 0 1 1 0 2H8.5a5.5 5.5 0 1 0 0 11h11.09l1 1-1 1H8.5a7.5 7.5 0 0 1 0-15z" opacity={.4} />
        <path fill="currentColor" d="M18.7 12.3a1 1 0 1 0-1.4 1.4l3.29 3.3-3.3 3.3a1 1 0 0 0 1.42 1.4l4-4 .06-.07a1 1 0 0 0-.06-1.34z" />
    </IconBase>
  ))
);

ArrowURightBoldDuotone.displayName = 'ArrowURightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowURightBoldDuotone, ArrowURightBoldDuotone as ArrowURightBoldDuotoneIcon, ArrowURightBoldDuotone as SiArrowURightBoldDuotone };
export default ArrowURightBoldDuotone;
export type { ArrowURightBoldDuotoneProps };

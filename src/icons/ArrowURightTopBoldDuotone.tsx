import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowURightTopBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightTopBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right-top-bold-duotone" {...props}>
      <path fill="currentColor" d="m19.59 6 1 1-1 1H8.5a5.5 5.5 0 1 0 0 11H16a1 1 0 1 1 0 2H8.5a7.5 7.5 0 0 1 0-15z" opacity={.4} />
        <path fill="currentColor" d="M18.7 2.3a1 1 0 1 0-1.4 1.4L20.58 7l-3.3 3.3a1 1 0 0 0 1.42 1.4l4-4a1 1 0 0 0 .06-1.33l-.06-.08z" />
    </IconBase>
  ))
);

ArrowURightTopBoldDuotone.displayName = 'ArrowURightTopBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowURightTopBoldDuotone, ArrowURightTopBoldDuotone as ArrowURightTopBoldDuotoneIcon, ArrowURightTopBoldDuotone as SiArrowURightTopBoldDuotone };
export default ArrowURightTopBoldDuotone;
export type { ArrowURightTopBoldDuotoneProps };

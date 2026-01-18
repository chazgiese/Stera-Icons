import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowURightTopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightTopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M17 6v2H8.5a5.5 5.5 0 1 0 0 11H16a1 1 0 1 1 0 2H8.5a7.5 7.5 0 0 1 0-15z" opacity={.4} />
        <path fill="currentColor" d="M18.7 2.3A1 1 0 0 0 17 3v8a1 1 0 0 0 1.7.7l4-4a1 1 0 0 0 .07-1.33l-.06-.08z" />
    </IconBase>
  ))
);

ArrowURightTopFillDuotone.displayName = 'ArrowURightTopFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowURightTopFillDuotone, ArrowURightTopFillDuotone as ArrowURightTopFillDuotoneIcon, ArrowURightTopFillDuotone as SiArrowURightTopFillDuotone };
export type { ArrowURightTopFillDuotoneProps };

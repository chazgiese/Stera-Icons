import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowURightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-right-fill-duotone" {...props}>
      <path fill="currentColor" d="M16 3a1 1 0 1 1 0 2H8.5a5.5 5.5 0 1 0 0 11H17v2H8.5a7.5 7.5 0 0 1 0-15z" opacity={.4} />
        <path fill="currentColor" d="M18.7 12.3a1 1 0 0 0-1.7.7v8a1 1 0 0 0 1.7.7l4-4 .07-.07a1 1 0 0 0-.06-1.34z" />
    </IconBase>
  ))
);

ArrowURightFillDuotone.displayName = 'ArrowURightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowURightFillDuotone, ArrowURightFillDuotone as ArrowURightFillDuotoneIcon, ArrowURightFillDuotone as SiArrowURightFillDuotone };
export type { ArrowURightFillDuotoneProps };

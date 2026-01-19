import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowULeftTopRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-top-duotone" {...props}>
      <path fill="currentColor" d="M15.5 6.25a7.25 7.25 0 1 1 0 14.5H8a.75.75 0 0 1 0-1.5h7.5a5.75 5.75 0 0 0 0-11.5H3.81L3.06 7l.75-.75z" opacity={.4} />
        <path fill="currentColor" d="M5.47 2.47a.75.75 0 1 1 1.06 1.06L3.06 7l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1-.1-.95l.1-.11z" />
    </IconBase>
  ))
);

ArrowULeftTopRegularDuotone.displayName = 'ArrowULeftTopRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowULeftTopRegularDuotone, ArrowULeftTopRegularDuotone as ArrowULeftTopRegularDuotoneIcon, ArrowULeftTopRegularDuotone as SiArrowULeftTopRegularDuotone };
export type { ArrowULeftTopRegularDuotoneProps };

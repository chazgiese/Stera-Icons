import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-left-fill-duotone" {...props}>
      <path fill="currentColor" d="M19 11a1 1 0 1 1 0 2h-7v-2z" opacity={.4} />
        <path fill="currentColor" d="M10.3 5.3A1 1 0 0 1 12 6v12a1 1 0 0 1-1.7.7l-6-6a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

ArrowLeftFillDuotone.displayName = 'ArrowLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowLeftFillDuotone, ArrowLeftFillDuotone as ArrowLeftFillDuotoneIcon, ArrowLeftFillDuotone as SiArrowLeftFillDuotone };
export type { ArrowLeftFillDuotoneProps };

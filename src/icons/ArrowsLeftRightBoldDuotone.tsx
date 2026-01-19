import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowsLeftRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowsLeftRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowsLeftRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrows-left-right-bold-duotone" {...props}>
      <path d="M20.5 16.5a1 1 0 1 1 0 2H4.91l-1-1 1-1zM20.09 7.5l-1 1H3.5a1 1 0 0 1 0-2h15.59z" opacity={0.4} />
        <path fill="currentColor" d="M5.8 12.8a1 1 0 0 1 1.4 1.4l-3.29 3.3 3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1-.07-1.33l.07-.08zM16.8 2.8a1 1 0 0 1 1.4 0l4 4 .07.07a1 1 0 0 1-.06 1.34l-4 4a1 1 0 0 1-1.42-1.42l3.3-3.29-3.3-3.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

ArrowsLeftRightBoldDuotone.displayName = 'ArrowsLeftRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowsLeftRightBoldDuotone, ArrowsLeftRightBoldDuotone as ArrowsLeftRightBoldDuotoneIcon, ArrowsLeftRightBoldDuotone as SiArrowsLeftRightBoldDuotone };
export type { ArrowsLeftRightBoldDuotoneProps };

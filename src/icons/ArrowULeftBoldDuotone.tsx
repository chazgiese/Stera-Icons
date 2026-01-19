import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowULeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-u-left-bold-duotone" {...props}>
      <path fill="currentColor" d="M15.5 3a7.5 7.5 0 0 1 0 15H4.41l-1-1 1-1H15.5a5.5 5.5 0 1 0 0-11H8a1 1 0 0 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M5.3 12.3a1 1 0 1 1 1.4 1.4L3.42 17l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4-.06-.07a1 1 0 0 1 .06-1.34z" />
    </IconBase>
  ))
);

ArrowULeftBoldDuotone.displayName = 'ArrowULeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArrowULeftBoldDuotone, ArrowULeftBoldDuotone as ArrowULeftBoldDuotoneIcon, ArrowULeftBoldDuotone as SiArrowULeftBoldDuotone };
export type { ArrowULeftBoldDuotoneProps };

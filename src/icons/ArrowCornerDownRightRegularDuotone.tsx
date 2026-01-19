import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerDownRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-right-duotone" {...props}>
      <path fill="currentColor" d="M3 3.25a.75.75 0 0 0-.75.75v8A3.75 3.75 0 0 0 6 15.75h13.19l.75-.75-.75-.75H6c-1.24 0-2.25-1-2.25-2.25V4A.75.75 0 0 0 3 3.25" opacity={.4} />
        <path fill="currentColor" d="M16.53 9.47a.75.75 0 1 0-1.06 1.06L19.94 15l-4.47 4.47a.75.75 0 1 0 1.06 1.06l5-5 .1-.11a.75.75 0 0 0-.1-.95z" />
    </IconBase>
  ))
);

ArrowCornerDownRightRegularDuotone.displayName = 'ArrowCornerDownRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRightRegularDuotone, ArrowCornerDownRightRegularDuotone as ArrowCornerDownRightRegularDuotoneIcon, ArrowCornerDownRightRegularDuotone as SiArrowCornerDownRightRegularDuotone };
export type { ArrowCornerDownRightRegularDuotoneProps };

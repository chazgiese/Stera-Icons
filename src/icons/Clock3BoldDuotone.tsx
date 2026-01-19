import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock3BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock3BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock3BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-3-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v5h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock3BoldDuotone.displayName = 'Clock3BoldDuotone';

// Triple export pattern (lucide-react style)
export { Clock3BoldDuotone, Clock3BoldDuotone as Clock3BoldDuotoneIcon, Clock3BoldDuotone as SiClock3BoldDuotone };
export type { Clock3BoldDuotoneProps };

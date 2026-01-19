import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock9BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock9BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock9BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-9-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock9BoldDuotone.displayName = 'Clock9BoldDuotone';

// Triple export pattern (lucide-react style)
export { Clock9BoldDuotone, Clock9BoldDuotone as Clock9BoldDuotoneIcon, Clock9BoldDuotone as SiClock9BoldDuotone };
export type { Clock9BoldDuotoneProps };

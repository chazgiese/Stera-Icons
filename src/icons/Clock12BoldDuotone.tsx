import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock12BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock12BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock12BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-12-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock12BoldDuotone.displayName = 'Clock12BoldDuotone';

// Triple export pattern (lucide-react style)
export { Clock12BoldDuotone, Clock12BoldDuotone as Clock12BoldDuotoneIcon, Clock12BoldDuotone as SiClock12BoldDuotone };
export default Clock12BoldDuotone;
export type { Clock12BoldDuotoneProps };

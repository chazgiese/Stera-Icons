import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock6FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock6FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock6FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-6-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock6FillDuotone.displayName = 'Clock6FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock6FillDuotone, Clock6FillDuotone as Clock6FillDuotoneIcon, Clock6FillDuotone as SiClock6FillDuotone };
export default Clock6FillDuotone;
export type { Clock6FillDuotoneProps };

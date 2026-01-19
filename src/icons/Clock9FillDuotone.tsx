import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock9FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock9FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock9FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-9-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v5H8a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock9FillDuotone.displayName = 'Clock9FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock9FillDuotone, Clock9FillDuotone as Clock9FillDuotoneIcon, Clock9FillDuotone as SiClock9FillDuotone };
export default Clock9FillDuotone;
export type { Clock9FillDuotoneProps };

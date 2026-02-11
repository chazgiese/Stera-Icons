import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock3FillProps = Omit<IconBaseProps, 'children'>;

const Clock3Fill = memo(
  forwardRef<SVGSVGElement, Clock3FillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-3-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-3V7a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock3Fill.displayName = 'Clock3Fill';

// Triple export pattern (lucide-react style)
export { Clock3Fill, Clock3Fill as Clock3FillIcon, Clock3Fill as SiClock3Fill };
export default Clock3Fill;
export type { Clock3FillProps };

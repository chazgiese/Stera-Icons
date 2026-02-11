import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock9FillProps = Omit<IconBaseProps, 'children'>;

const Clock9Fill = memo(
  forwardRef<SVGSVGElement, Clock9FillProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-9-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 4a1 1 0 0 0-1 1v4H8a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock9Fill.displayName = 'Clock9Fill';

// Triple export pattern (lucide-react style)
export { Clock9Fill, Clock9Fill as Clock9FillIcon, Clock9Fill as SiClock9Fill };
export default Clock9Fill;
export type { Clock9FillProps };

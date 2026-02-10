import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock3BoldProps = Omit<IconBaseProps, 'children'>;

const Clock3Bold = memo(
  forwardRef<SVGSVGElement, Clock3BoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-3-bold" {...props}>
      <path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v4h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock3Bold.displayName = 'Clock3Bold';

// Triple export pattern (lucide-react style)
export { Clock3Bold, Clock3Bold as Clock3BoldIcon, Clock3Bold as SiClock3Bold };
export default Clock3Bold;
export type { Clock3BoldProps };

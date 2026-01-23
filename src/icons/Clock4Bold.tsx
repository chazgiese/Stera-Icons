import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock4BoldProps = Omit<IconBaseProps, 'children'>;

const Clock4Bold = memo(
  forwardRef<SVGSVGElement, Clock4BoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-4-bold" {...props}>
      <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v5.42l2.96 1.71a1 1 0 0 1-1 1.74l-3.46-2A1 1 0 0 1 11 12V6a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock4Bold.displayName = 'Clock4Bold';

// Triple export pattern (lucide-react style)
export { Clock4Bold, Clock4Bold as Clock4BoldIcon, Clock4Bold as SiClock4Bold };
export default Clock4Bold;
export type { Clock4BoldProps };

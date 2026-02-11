import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock4RegularProps = Omit<IconBaseProps, 'children'>;

const Clock4Regular = memo(
  forwardRef<SVGSVGElement, Clock4RegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-4" {...props}>
      <path d="M12 6.25c.41 0 .75.34.75.75v4.57l3.09 1.78a.75.75 0 1 1-.75 1.3l-3.46-2-.04-.02-.02-.01-.13-.13-.05-.06-.04-.06-.03-.06-.03-.07-.02-.07-.02-.17V7c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock4Regular.displayName = 'Clock4Regular';

// Triple export pattern (lucide-react style)
export { Clock4Regular, Clock4Regular as Clock4RegularIcon, Clock4Regular as SiClock4Regular };
export default Clock4Regular;
export type { Clock4RegularProps };

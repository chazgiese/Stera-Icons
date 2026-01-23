import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock4RegularProps = Omit<IconBaseProps, 'children'>;

const Clock4Regular = memo(
  forwardRef<SVGSVGElement, Clock4RegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-4" {...props}>
      <path fill="currentColor" d="M12 5.25c.41 0 .75.34.75.75v5.57l3.09 1.78a.75.75 0 1 1-.75 1.3l-3.46-2a.8.8 0 0 1-.38-.65V6c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock4Regular.displayName = 'Clock4Regular';

// Triple export pattern (lucide-react style)
export { Clock4Regular, Clock4Regular as Clock4RegularIcon, Clock4Regular as SiClock4Regular };
export default Clock4Regular;
export type { Clock4RegularProps };

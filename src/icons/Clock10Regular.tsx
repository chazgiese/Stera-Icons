import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock10RegularProps = Omit<IconBaseProps, 'children'>;

const Clock10Regular = memo(
  forwardRef<SVGSVGElement, Clock10RegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-10" {...props}>
      <path fill="currentColor" d="M12 5.25c.41 0 .75.34.75.75v6q0 .1-.03.2l-.02.07-.02.03-.03.07-.02.03-.15.17-.04.04-.08.04-.05.03-.14.05-.11.02h-.16l-.1-.03-.08-.03h-.02l-.08-.04-3.46-2a.75.75 0 1 1 .75-1.3l2.34 1.35V6c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock10Regular.displayName = 'Clock10Regular';

// Triple export pattern (lucide-react style)
export { Clock10Regular, Clock10Regular as Clock10RegularIcon, Clock10Regular as SiClock10Regular };
export default Clock10Regular;
export type { Clock10RegularProps };

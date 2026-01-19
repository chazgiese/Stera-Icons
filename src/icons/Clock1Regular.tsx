import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock1RegularProps = Omit<IconBaseProps, 'children'>;

const Clock1Regular = memo(
  forwardRef<SVGSVGElement, Clock1RegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-1" {...props}>
      <path fill="currentColor" d="M12 5.25c.41 0 .75.34.75.75v3.2l.6-1.04a.75.75 0 1 1 1.3.75l-2 3.47-.02.03-.01.02-.14.14-.04.04-.07.04-.06.03-.07.03-.07.02-.11.02h-.16l-.1-.03-.08-.02-.02-.01-.07-.04-.04-.02-.02-.01-.13-.13-.05-.06-.04-.07-.03-.05-.05-.14-.02-.17V6c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock1Regular.displayName = 'Clock1Regular';

// Triple export pattern (lucide-react style)
export { Clock1Regular, Clock1Regular as Clock1RegularIcon, Clock1Regular as SiClock1Regular };
export type { Clock1RegularProps };

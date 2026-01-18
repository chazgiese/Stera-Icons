import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock2RegularProps = Omit<IconBaseProps, 'children'>;

const Clock2Regular = memo(
  forwardRef<SVGSVGElement, Clock2RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 5.25c.41 0 .75.34.75.75v4.7l2.34-1.35a.75.75 0 0 1 .75 1.3l-3.46 2-.08.04h-.02l-.09.03-.09.02h-.01l-.09.01h-.06l-.11-.02-.07-.02-.07-.03-.06-.03-.06-.04-.06-.05-.13-.13v-.02l-.03-.04-.05-.1-.02-.08-.02-.09v-.01l-.01-.09V6c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock2Regular.displayName = 'Clock2Regular';

// Triple export pattern (lucide-react style)
export { Clock2Regular, Clock2Regular as Clock2RegularIcon, Clock2Regular as SiClock2Regular };
export type { Clock2RegularProps };

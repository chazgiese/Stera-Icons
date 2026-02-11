import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock4BoldProps = Omit<IconBaseProps, 'children'>;

const Clock4Bold = memo(
  forwardRef<SVGSVGElement, Clock4BoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-4-bold" {...props}>
      <path d="M12 6a1 1 0 0 1 1 1v4.42l2.96 1.71a1 1 0 0 1-1 1.74l-3.46-2-.03-.02-.04-.03-.05-.04q-.01 0-.02-.02l-.18-.18-.02-.04-.05-.09-.01-.02-.03-.07-.01-.02-.02-.07-.01-.04-.02-.1v-.04l-.01-.07V7a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock4Bold.displayName = 'Clock4Bold';

// Triple export pattern (lucide-react style)
export { Clock4Bold, Clock4Bold as Clock4BoldIcon, Clock4Bold as SiClock4Bold };
export default Clock4Bold;
export type { Clock4BoldProps };

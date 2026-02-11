import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock4BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock4BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock4BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-4-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M12 6a1 1 0 0 1 1 1v4.42l2.96 1.71a1 1 0 0 1-1 1.74l-3.46-2-.03-.02-.04-.03-.05-.04q-.01 0-.02-.02l-.06-.04-.01-.02-.1-.12-.03-.04-.05-.09-.01-.02-.03-.07-.01-.02-.02-.07-.01-.04-.02-.1v-.04l-.01-.07V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock4BoldDuotone.displayName = 'Clock4BoldDuotone';

// Triple export pattern (lucide-react style)
export { Clock4BoldDuotone, Clock4BoldDuotone as Clock4BoldDuotoneIcon, Clock4BoldDuotone as SiClock4BoldDuotone };
export default Clock4BoldDuotone;
export type { Clock4BoldDuotoneProps };

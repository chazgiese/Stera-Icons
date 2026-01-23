import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock4BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock4BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock4BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-4-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v5.42l2.96 1.71a1 1 0 0 1-1 1.74l-3.46-2-.03-.02-.04-.03-.05-.04q-.01 0-.02-.02l-.06-.04-.01-.02-.1-.12-.03-.04-.05-.09-.01-.02-.03-.07-.01-.02-.02-.07-.01-.04-.02-.1v-.04l-.01-.07V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock4BoldDuotone.displayName = 'Clock4BoldDuotone';

// Triple export pattern (lucide-react style)
export { Clock4BoldDuotone, Clock4BoldDuotone as Clock4BoldDuotoneIcon, Clock4BoldDuotone as SiClock4BoldDuotone };
export default Clock4BoldDuotone;
export type { Clock4BoldDuotoneProps };

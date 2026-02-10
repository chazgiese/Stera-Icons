import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock1BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock1BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock1BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-1-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v1.27l.13-.23a1 1 0 0 1 1.74 1l-2 3.46-.02.02-.03.05-.04.05-.02.02-.18.18-.04.02-.04.03-.05.02-.02.01-.07.03-.02.01-.07.02-.04.01-.1.02h-.11L12 13h-.12l-.04-.01-.1-.02-.05-.02-.03-.01-.06-.02-.05-.03-.03-.02h-.02l-.03-.02-.04-.03-.05-.04q-.01 0-.02-.02l-.06-.04-.01-.02-.1-.12-.03-.04-.05-.09-.01-.02a1 1 0 0 1-.09-.3v-.04l-.01-.07V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock1BoldDuotone.displayName = 'Clock1BoldDuotone';

// Triple export pattern (lucide-react style)
export { Clock1BoldDuotone, Clock1BoldDuotone as Clock1BoldDuotoneIcon, Clock1BoldDuotone as SiClock1BoldDuotone };
export default Clock1BoldDuotone;
export type { Clock1BoldDuotoneProps };

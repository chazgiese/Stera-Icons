import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock10BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock10BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock10BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-10-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M12 6a1 1 0 0 1 1 1v5a1 1 0 0 1-.24.65l-.03.03-.04.04-.03.03-.12.1-.04.01a1 1 0 0 1-.32.12h-.04l-.12.02h-.13l-.08-.02h-.02l-.15-.05-.04-.01-.1-.05-3.47-2a1 1 0 0 1 1-1.74L11 10.27V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock10BoldDuotone.displayName = 'Clock10BoldDuotone';

// Triple export pattern (lucide-react style)
export { Clock10BoldDuotone, Clock10BoldDuotone as Clock10BoldDuotoneIcon, Clock10BoldDuotone as SiClock10BoldDuotone };
export default Clock10BoldDuotone;
export type { Clock10BoldDuotoneProps };

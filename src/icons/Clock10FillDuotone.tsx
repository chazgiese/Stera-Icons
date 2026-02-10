import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock10FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock10FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock10FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-10-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 4a1 1 0 0 0-1 1v3.27L9.04 9.13a1 1 0 0 0-1 1.74l3.46 2 .1.05.04.01.15.05h.02l.08.01h.1L12 13h.02l.12-.01h.04a1 1 0 0 0 .32-.13l.04-.02.12-.1q.02 0 .03-.02l.04-.04.03-.03a1 1 0 0 0 .2-.4l.02-.04L13 12V7a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v5a1 1 0 0 1-.24.65l-.03.03-.04.04-.03.03-.12.1-.04.01a1 1 0 0 1-.32.12h-.04l-.12.02h-.13l-.08-.02h-.02l-.15-.05-.04-.01-.1-.05-3.47-2a1 1 0 0 1 1-1.74L11 10.27V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock10FillDuotone.displayName = 'Clock10FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock10FillDuotone, Clock10FillDuotone as Clock10FillDuotoneIcon, Clock10FillDuotone as SiClock10FillDuotone };
export default Clock10FillDuotone;
export type { Clock10FillDuotoneProps };

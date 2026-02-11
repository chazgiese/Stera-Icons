import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock10BoldProps = Omit<IconBaseProps, 'children'>;

const Clock10Bold = memo(
  forwardRef<SVGSVGElement, Clock10BoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-10-bold" {...props}>
      <path d="M12 6a1 1 0 0 1 1 1v5a1 1 0 0 1-.24.65l-.03.03-.04.04-.07.06-.03.03-.05.03-.04.02-.23.1-.03.01-.22.03h-.13l-.08-.02h-.02l-.06-.02h-.04l-.04-.03-.05-.01-.1-.05-3.46-2a1 1 0 0 1 1-1.74L11 10.27V7a1 1 0 0 1 1-1" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock10Bold.displayName = 'Clock10Bold';

// Triple export pattern (lucide-react style)
export { Clock10Bold, Clock10Bold as Clock10BoldIcon, Clock10Bold as SiClock10Bold };
export default Clock10Bold;
export type { Clock10BoldProps };

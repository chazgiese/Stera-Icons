import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock4FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock4FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock4FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-4-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 4a1 1 0 0 0-1 1v5.09l.01.04.02.1v.04l.03.07v.02l.04.07v.02l.06.1.02.03.18.18.02.02.05.04.04.03.03.02 3.46 2a1 1 0 0 0 1-1.74L13 11.43V7a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M12 6a1 1 0 0 1 1 1v4.42l2.96 1.71a1 1 0 0 1-1 1.74l-3.46-2-.03-.02-.04-.03-.05-.04q-.01 0-.02-.02l-.06-.04-.01-.02-.1-.12-.03-.04-.05-.09-.01-.02-.03-.07-.01-.02-.02-.07-.01-.04-.02-.1v-.04l-.01-.07V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock4FillDuotone.displayName = 'Clock4FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock4FillDuotone, Clock4FillDuotone as Clock4FillDuotoneIcon, Clock4FillDuotone as SiClock4FillDuotone };
export default Clock4FillDuotone;
export type { Clock4FillDuotoneProps };

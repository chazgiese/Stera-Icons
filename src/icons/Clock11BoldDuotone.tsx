import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock11BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock11BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock11BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-11-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M12 6a1 1 0 0 1 1 1v5.09l-.01.04a1 1 0 0 1-.08.3l-.02.02q0 .03-.03.05l-.02.04-.2.22-.03.03-.04.03-.04.03-.03.02h-.02l-.03.02-.05.03-.06.02-.03.01-.05.01-.05.02h-.06l-.03.01H12L12 13h-.02l-.21-.03-.04-.01-.07-.02h-.02l-.06-.04-.04-.01-.03-.02-.06-.04h-.02l-.2-.19-.02-.02q0-.02-.03-.05l-.03-.05-.02-.02-2-3.46a1 1 0 0 1 1.74-1l.13.23V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock11BoldDuotone.displayName = 'Clock11BoldDuotone';

// Triple export pattern (lucide-react style)
export { Clock11BoldDuotone, Clock11BoldDuotone as Clock11BoldDuotoneIcon, Clock11BoldDuotone as SiClock11BoldDuotone };
export default Clock11BoldDuotone;
export type { Clock11BoldDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock2BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock2BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock2BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-2-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 6a1 1 0 0 1 1 1v3.27l1.96-1.14a1 1 0 0 1 1 1.74l-3.46 2h-.02l-.03.02-.05.03-.06.02-.03.01-.06.02h-.04l-.03.01-.07.01H12L12 13h-.09l-.04-.01-.1-.02h-.04l-.07-.03h-.02l-.07-.04-.02-.01-.1-.05-.03-.02-.05-.04-.01-.01-.13-.13-.02-.02q0-.02-.03-.05l-.03-.04-.02-.03v-.02l-.02-.03-.03-.05-.02-.06v-.02l-.02-.02v-.05l-.02-.04v-.03l-.02-.15V7a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock2BoldDuotone.displayName = 'Clock2BoldDuotone';

// Triple export pattern (lucide-react style)
export { Clock2BoldDuotone, Clock2BoldDuotone as Clock2BoldDuotoneIcon, Clock2BoldDuotone as SiClock2BoldDuotone };
export default Clock2BoldDuotone;
export type { Clock2BoldDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock2FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock2FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock2FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-2-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v6.03q0 .07.02.15v.03l.02.09.01.02v.02l.03.06.03.05q0 .02.02.03v.02l.02.03.03.04.03.05.02.02.13.13.06.05.04.02.09.05.02.01.07.03.02.01.07.02.04.01.1.02h.11L12 13h.11l.07-.02h.03l.04-.01.06-.02.03-.01.06-.02.05-.03.03-.02h.02l3.46-2a1 1 0 0 0-1-1.74L13 10.27V6a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v4.27l1.96-1.14a1 1 0 0 1 1 1.74l-3.46 2h-.02l-.03.02-.05.03-.06.02-.03.01-.06.02h-.04l-.03.01-.07.01H12L12 13h-.09l-.04-.01-.1-.02h-.04l-.07-.03h-.02l-.07-.04-.02-.01-.1-.05-.03-.02-.05-.04-.01-.01-.13-.13-.02-.02q0-.02-.03-.05l-.03-.04-.02-.03v-.02l-.02-.03-.03-.05-.02-.06v-.02l-.02-.02v-.05l-.02-.04v-.03l-.02-.15V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock2FillDuotone.displayName = 'Clock2FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock2FillDuotone, Clock2FillDuotone as Clock2FillDuotoneIcon, Clock2FillDuotone as SiClock2FillDuotone };
export default Clock2FillDuotone;
export type { Clock2FillDuotoneProps };

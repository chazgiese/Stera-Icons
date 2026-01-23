import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock7FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock7FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock7FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-7-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v5.73l-1.87 3.23a1 1 0 0 0 1.74 1l2-3.46v-.02l.02-.03.03-.05.02-.06.01-.03.02-.06v-.04l.01-.03.02-.17V6a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6l-.02.2-.02.06-.01.05-.01.03-.03.06v.03l-.04.06v.01l-2 3.46a1 1 0 0 1-1.74-1L11 11.73V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock7FillDuotone.displayName = 'Clock7FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock7FillDuotone, Clock7FillDuotone as Clock7FillDuotoneIcon, Clock7FillDuotone as SiClock7FillDuotone };
export default Clock7FillDuotone;
export type { Clock7FillDuotoneProps };

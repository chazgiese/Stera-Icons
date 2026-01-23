import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock8FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock8FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock8FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="clock-8-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v5.42l-2.96 1.71a1 1 0 0 0 1 1.74l3.46-2 .01-.01a1 1 0 0 0 .33-.33l.02-.02A1 1 0 0 0 13 12V6a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6a1 1 0 0 1-.06.34v.02a1 1 0 0 1-.35.44l-.01.01-.07.05h-.01l-3.47 2a1 1 0 0 1-1-1.73l2.97-1.7V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock8FillDuotone.displayName = 'Clock8FillDuotone';

// Triple export pattern (lucide-react style)
export { Clock8FillDuotone, Clock8FillDuotone as Clock8FillDuotoneIcon, Clock8FillDuotone as SiClock8FillDuotone };
export default Clock8FillDuotone;
export type { Clock8FillDuotoneProps };

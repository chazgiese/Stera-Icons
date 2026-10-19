import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock8FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock8FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock8FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 4.38c-.48 0-.87.39-.87.87v4.5L8.1 13.23c-.42.24-.56.78-.32 1.2s.77.56 1.2.32l3.43-1.99q.16-.09.28-.24l.01-.01.04-.06.01-.01q.13-.2.13-.45V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v5q0 .25-.13.45l-.01.01-.04.06v.01q-.12.15-.29.24l-3.44 1.99c-.42.24-.95.1-1.2-.32-.23-.42-.1-.96.33-1.2l3.03-1.75V7c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

Clock8FillDuotone.displayName = 'Clock8FillDuotone';

// Triple export pattern
export { Clock8FillDuotone, Clock8FillDuotone as Clock8FillDuotoneIcon, Clock8FillDuotone as SiClock8FillDuotone };
export default Clock8FillDuotone;
export type { Clock8FillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock3FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock3FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock3FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 4.38c-.48 0-.87.39-.87.87v5c0 .48.39.88.87.88h4c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-3.12V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v4.13H16c.48 0 .88.39.88.87s-.4.88-.88.88h-4c-.48 0-.87-.4-.87-.88V7c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

Clock3FillDuotone.displayName = 'Clock3FillDuotone';

// Triple export pattern
export { Clock3FillDuotone, Clock3FillDuotone as Clock3FillDuotoneIcon, Clock3FillDuotone as SiClock3FillDuotone };
export default Clock3FillDuotone;
export type { Clock3FillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock9FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock9FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock9FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 4.38c-.48 0-.87.39-.87.87v4.13H8c-.48 0-.87.39-.87.87s.39.88.87.88h4c.48 0 .88-.4.88-.88V7c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 6.13c.48 0 .88.39.88.87v5c0 .48-.4.88-.88.88H8c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h3.13V7c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

Clock9FillDuotone.displayName = 'Clock9FillDuotone';

// Triple export pattern
export { Clock9FillDuotone, Clock9FillDuotone as Clock9FillDuotoneIcon, Clock9FillDuotone as SiClock9FillDuotone };
export default Clock9FillDuotone;
export type { Clock9FillDuotoneProps };

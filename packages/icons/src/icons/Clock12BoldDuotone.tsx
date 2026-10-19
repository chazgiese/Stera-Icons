import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock12BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock12BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock12BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 6c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

Clock12BoldDuotone.displayName = 'Clock12BoldDuotone';

// Triple export pattern
export { Clock12BoldDuotone, Clock12BoldDuotone as Clock12BoldDuotoneIcon, Clock12BoldDuotone as SiClock12BoldDuotone };
export default Clock12BoldDuotone;
export type { Clock12BoldDuotoneProps };

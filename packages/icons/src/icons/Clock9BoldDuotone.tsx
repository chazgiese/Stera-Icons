import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock9BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock9BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock9BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 6c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1h3V7c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

Clock9BoldDuotone.displayName = 'Clock9BoldDuotone';

// Triple export pattern
export { Clock9BoldDuotone, Clock9BoldDuotone as Clock9BoldDuotoneIcon, Clock9BoldDuotone as SiClock9BoldDuotone };
export default Clock9BoldDuotone;
export type { Clock9BoldDuotoneProps };

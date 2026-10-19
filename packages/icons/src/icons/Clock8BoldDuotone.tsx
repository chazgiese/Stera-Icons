import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type Clock8BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock8BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock8BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 6c.55 0 1 .45 1 1v5q0 .18-.06.34v.02l-.13.23-.02.03-.04.03q0 .03-.03.04l-.03.03-.04.04-.06.04-.01.01-.07.05h-.01l-3.46 2c-.48.28-1.1.12-1.37-.36-.28-.48-.11-1.09.37-1.37l2.96-1.7V7c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

Clock8BoldDuotone.displayName = 'Clock8BoldDuotone';

// Triple export pattern
export { Clock8BoldDuotone, Clock8BoldDuotone as Clock8BoldDuotoneIcon, Clock8BoldDuotone as SiClock8BoldDuotone };
export default Clock8BoldDuotone;
export type { Clock8BoldDuotoneProps };

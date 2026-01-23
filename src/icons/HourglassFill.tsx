import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HourglassFillProps = Omit<IconBaseProps, 'children'>;

const HourglassFill = memo(
  forwardRef<SVGSVGElement, HourglassFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="hourglass-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17 1a3 3 0 0 1 3 3v1.12a7 7 0 0 1-2.63 5.46l-1.28 1.03a.5.5 0 0 0 0 .78l1.28 1.03A7 7 0 0 1 20 18.88V20a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1.12a7 7 0 0 1 2.63-5.46l1.28-1.03a.5.5 0 0 0 0-.78l-1.28-1.03A7 7 0 0 1 4 5.12V4a3 3 0 0 1 3-3zM9.44 6.07a1 1 0 0 0-.63 1.78l1.29 1.03q.66.53 1.02 1.22c.31.57.38 1.23.38 1.9q0 1.3-.21 2.6-.16.86-.8 1.49l-2.2 2.2A1 1 0 0 0 9 20h6a1 1 0 0 0 .7-1.7l-2.2-2.21c-.4-.41-.7-.93-.79-1.5a16 16 0 0 1-.21-2.6c0-.66.07-1.32.38-1.9q.36-.68 1.02-1.21l1.29-1.03a1 1 0 0 0-.63-1.78z" clipRule="evenodd" />
    </IconBase>
  ))
);

HourglassFill.displayName = 'HourglassFill';

// Triple export pattern (lucide-react style)
export { HourglassFill, HourglassFill as HourglassFillIcon, HourglassFill as SiHourglassFill };
export default HourglassFill;
export type { HourglassFillProps };

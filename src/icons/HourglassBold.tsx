import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HourglassBoldProps = Omit<IconBaseProps, 'children'>;

const HourglassBold = memo(
  forwardRef<SVGSVGElement, HourglassBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="hourglass-bold" {...props}>
      <path fill="currentColor" d="M14.56 6.07a1 1 0 0 1 .63 1.78L13.9 8.88q-.66.53-1.02 1.22a4 4 0 0 0-.38 1.9q0 1.3.21 2.6.16.86.79 1.49l2.2 2.2A1 1 0 0 1 15 20H9a1 1 0 0 1-.7-1.7l2.2-2.21c.4-.41.7-.93.79-1.5q.21-1.3.21-2.6c0-.66-.07-1.32-.38-1.9a4 4 0 0 0-1.02-1.21L8.8 7.85a1 1 0 0 1 .63-1.78z" />
        <path fill="currentColor" fillRule="evenodd" d="M17 1a3 3 0 0 1 3 3v1.12a7 7 0 0 1-2.63 5.46l-1.28 1.03a.5.5 0 0 0 0 .78l1.28 1.03A7 7 0 0 1 20 18.88V20a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1.12a7 7 0 0 1 2.63-5.46l1.28-1.03a.5.5 0 0 0 0-.78l-1.28-1.03A7 7 0 0 1 4 5.12V4a3 3 0 0 1 3-3zM7 3a1 1 0 0 0-1 1v1.12a5 5 0 0 0 1.88 3.9l1.28 1.03a2.5 2.5 0 0 1 0 3.9l-1.28 1.03A5 5 0 0 0 6 18.88V20a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1.12a5 5 0 0 0-1.88-3.9l-1.28-1.03a2.5 2.5 0 0 1 0-3.9l1.28-1.03A5 5 0 0 0 18 5.12V4a1 1 0 0 0-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

HourglassBold.displayName = 'HourglassBold';

// Triple export pattern (lucide-react style)
export { HourglassBold, HourglassBold as HourglassBoldIcon, HourglassBold as SiHourglassBold };
export default HourglassBold;
export type { HourglassBoldProps };

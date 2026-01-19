import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HourglassFullBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HourglassFullBoldDuotone = memo(
  forwardRef<SVGSVGElement, HourglassFullBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hourglass-full-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17 1a3 3 0 0 1 3 3v1.12a7 7 0 0 1-2.63 5.46l-1.28 1.03a.5.5 0 0 0 0 .78l1.28 1.03A7 7 0 0 1 20 18.88V20a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1.12a7 7 0 0 1 2.63-5.46l1.28-1.03a.5.5 0 0 0 0-.78l-1.28-1.03A7 7 0 0 1 4 5.12V4a3 3 0 0 1 3-3zM7 3a1 1 0 0 0-1 1v1.12a5 5 0 0 0 1.88 3.9l1.28 1.03a2.5 2.5 0 0 1 0 3.9l-1.28 1.03A5 5 0 0 0 6 18.88V20a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1.12a5 5 0 0 0-1.88-3.9l-1.28-1.03a2.5 2.5 0 0 1 0-3.9l1.28-1.03A5 5 0 0 0 18 5.12V4a1 1 0 0 0-1-1z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.58 4.5a1 1 0 0 1 .88 1.15 3.5 3.5 0 0 1-1.27 2.2L13.9 8.88q-.66.53-1.02 1.22a1 1 0 0 1-1.76 0 4 4 0 0 0-1.02-1.22L8.8 7.85a3.5 3.5 0 0 1-1.27-2.2 1 1 0 0 1 .99-1.15h7.04" />
    </IconBase>
  ))
);

HourglassFullBoldDuotone.displayName = 'HourglassFullBoldDuotone';

// Triple export pattern (lucide-react style)
export { HourglassFullBoldDuotone, HourglassFullBoldDuotone as HourglassFullBoldDuotoneIcon, HourglassFullBoldDuotone as SiHourglassFullBoldDuotone };
export type { HourglassFullBoldDuotoneProps };

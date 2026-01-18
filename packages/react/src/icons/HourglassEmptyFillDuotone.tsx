import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HourglassEmptyFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HourglassEmptyFillDuotone = memo(
  forwardRef<SVGSVGElement, HourglassEmptyFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17 1a3 3 0 0 1 3 3v1.12a7 7 0 0 1-2.63 5.46l-1.28 1.03a.5.5 0 0 0 0 .78l1.28 1.03A7 7 0 0 1 20 18.88V20a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1.12a7 7 0 0 1 2.63-5.46l1.28-1.03a.5.5 0 0 0 0-.78l-1.28-1.03A7 7 0 0 1 4 5.12V4a3 3 0 0 1 3-3zm-5 12.91c-.38 0-.81.13-1.15.44l-.14.15c-.5.59-1.12 1.03-1.9 1.65a3.5 3.5 0 0 0-1.27 2.2 1 1 0 0 0 .99 1.15h6.94a1 1 0 0 0 .99-1.15 3.5 3.5 0 0 0-1.27-2.2c-.68-.54-1.25-.95-1.7-1.44l-.2-.21-.14-.15a1.7 1.7 0 0 0-1.15-.44" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 13.91c.38 0 .81.13 1.15.44l.14.15.2.21c.45.5 1.02.9 1.7 1.44a3.5 3.5 0 0 1 1.27 2.2 1 1 0 0 1-.99 1.15H8.53a1 1 0 0 1-.99-1.15 3.5 3.5 0 0 1 1.27-2.2c.78-.62 1.4-1.06 1.9-1.65l.14-.15a1.7 1.7 0 0 1 1.15-.44" />
    </IconBase>
  ))
);

HourglassEmptyFillDuotone.displayName = 'HourglassEmptyFillDuotone';

// Triple export pattern (lucide-react style)
export { HourglassEmptyFillDuotone, HourglassEmptyFillDuotone as HourglassEmptyFillDuotoneIcon, HourglassEmptyFillDuotone as SiHourglassEmptyFillDuotone };
export type { HourglassEmptyFillDuotoneProps };

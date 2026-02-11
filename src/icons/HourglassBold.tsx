import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HourglassBoldProps = Omit<IconBaseProps, 'children'>;

const HourglassBold = memo(
  forwardRef<SVGSVGElement, HourglassBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="hourglass-bold" {...props}>
      <path fillRule="evenodd" d="M18.5 3a1 1 0 1 1 0 2H18v1c0 .86 0 1.49-.16 2.07a4 4 0 0 1-.71 1.36c-.38.48-.9.83-1.6 1.32L13.74 12l1.79 1.25c.7.49 1.22.84 1.6 1.32a4 4 0 0 1 .7 1.36c.18.58.17 1.21.17 2.07v1h.5a1 1 0 1 1 0 2h-13a1 1 0 1 1 0-2H6v-1c0-.86 0-1.49.17-2.07a4 4 0 0 1 .7-1.36c.38-.48.9-.83 1.6-1.32L10.26 12l-1.79-1.25c-.7-.49-1.22-.84-1.6-1.32a4 4 0 0 1-.7-1.36C5.99 7.5 6 6.86 6 6V5h-.5a1 1 0 0 1 0-2zM9.62 14.89a6 6 0 0 0-1.19.93 2 2 0 0 0-.35.67A6 6 0 0 0 8 18V19h8v-1c0-.98 0-1.26-.08-1.5a2 2 0 0 0-.35-.68 6 6 0 0 0-1.2-.93L12 13.22zM8 6c0 .98 0 1.26.08 1.5a2 2 0 0 0 .35.68c.16.2.4.38 1.2.93L12 10.78l2.38-1.67a6 6 0 0 0 1.19-.93 2 2 0 0 0 .35-.67c.07-.25.08-.53.08-1.5V5H8z" clipRule="evenodd" />
    </IconBase>
  ))
);

HourglassBold.displayName = 'HourglassBold';

// Triple export pattern (lucide-react style)
export { HourglassBold, HourglassBold as HourglassBoldIcon, HourglassBold as SiHourglassBold };
export default HourglassBold;
export type { HourglassBoldProps };

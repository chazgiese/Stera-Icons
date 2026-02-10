import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HourglassFillProps = Omit<IconBaseProps, 'children'>;

const HourglassFill = memo(
  forwardRef<SVGSVGElement, HourglassFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="hourglass-fill" {...props}>
      <path fill="currentColor" d="M18.5 3a1 1 0 1 1 0 2H18v1c0 .86 0 1.49-.16 2.07a4 4 0 0 1-.71 1.36c-.38.48-.9.83-1.6 1.32L13.74 12l1.79 1.25c.7.49 1.22.84 1.6 1.32a4 4 0 0 1 .7 1.36c.18.58.17 1.21.17 2.07v1h.5a1 1 0 1 1 0 2h-13a1 1 0 1 1 0-2H6v-1c0-.86 0-1.49.17-2.07a4 4 0 0 1 .7-1.36c.38-.48.9-.83 1.59-1.31l.01-.01L10.26 12l-1.79-1.25h-.01c-.7-.5-1.21-.84-1.59-1.32a4 4 0 0 1-.7-1.36C5.99 7.5 6 6.86 6 6V5h-.5a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

HourglassFill.displayName = 'HourglassFill';

// Triple export pattern (lucide-react style)
export { HourglassFill, HourglassFill as HourglassFillIcon, HourglassFill as SiHourglassFill };
export default HourglassFill;
export type { HourglassFillProps };

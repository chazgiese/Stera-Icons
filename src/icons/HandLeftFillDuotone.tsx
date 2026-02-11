import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, HandLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-left-fill-duotone" {...props}>
      <path d="M10.27 4c.44 0 .8.36.8.8v6.3a1 1 0 0 0 2 0V5.62a.8.8 0 0 1 1.6.08v7.2a1 1 0 0 0 1.86.5l1.48-2.5v-.01a.8.8 0 0 1 1.1-.3.8.8 0 0 1 .3 1.1l-.07.13-1.1 2.8-.03.1-.02.1A6.2 6.2 0 0 1 5.87 13.8V7.5a.8.8 0 0 1 1.6 0v4.05a1 1 0 1 0 2 0V4.8c0-.44.36-.8.8-.8" opacity={.4} />
        <path fillRule="evenodd" d="M10.27 2c.96 0 1.8.48 2.3 1.22q.6-.31 1.3-.32a2.8 2.8 0 0 1 2.8 2.8v3.67a2.8 2.8 0 0 1 4.52 3.22l-1.05 2.68A8.2 8.2 0 0 1 3.87 13.8V7.5a2.8 2.8 0 0 1 3.6-2.68V4.8a2.8 2.8 0 0 1 2.8-2.8m0 2a.8.8 0 0 0-.8.8v6.75a1 1 0 0 1-2 0V7.5a.8.8 0 0 0-1.6 0v6.3a6.2 6.2 0 0 0 12.34.92l.03-.1 1.1-2.8q.03-.08.07-.13a.8.8 0 0 0-1.39-.8l-1.49 2.52a1 1 0 0 1-1.86-.51V5.7a.8.8 0 0 0-1.6-.08v5.48a1 1 0 0 1-2 0V4.8a.8.8 0 0 0-.8-.8" clipRule="evenodd" />
    </IconBase>
  ))
);

HandLeftFillDuotone.displayName = 'HandLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { HandLeftFillDuotone, HandLeftFillDuotone as HandLeftFillDuotoneIcon, HandLeftFillDuotone as SiHandLeftFillDuotone };
export default HandLeftFillDuotone;
export type { HandLeftFillDuotoneProps };

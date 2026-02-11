import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, HandLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-left-bold-duotone" {...props}>
      <path d="M18.2 14.73a1 1 0 0 0 1.9.63l.03-.09a8.2 8.2 0 0 1-16.26-1.44 1 1 0 0 0 2 .07v-.1a6.2 6.2 0 0 0 12.34.93M18.24 14.63l-.02.05.03-.07z" opacity={0.4} />
        <path d="M10.27 2c.96 0 1.8.48 2.3 1.22q.6-.31 1.3-.32a2.8 2.8 0 0 1 2.8 2.8v3.67a2.8 2.8 0 0 1 4.52 3.22l-1.09 2.77a1 1 0 0 1-1.86-.73l1.1-2.8.07-.14a.8.8 0 0 0-1.39-.8l-1.49 2.52a1 1 0 0 1-1.86-.51V5.7a.8.8 0 0 0-1.6-.08v5.48a1 1 0 0 1-2 0V4.8a.8.8 0 0 0-1.6 0v6.75a1 1 0 0 1-2 0V7.5a.8.8 0 0 0-1.6 0v6.3a1 1 0 0 1-2 0V7.5a2.8 2.8 0 0 1 3.6-2.68V4.8a2.8 2.8 0 0 1 2.8-2.8" />
    </IconBase>
  ))
);

HandLeftBoldDuotone.displayName = 'HandLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { HandLeftBoldDuotone, HandLeftBoldDuotone as HandLeftBoldDuotoneIcon, HandLeftBoldDuotone as SiHandLeftBoldDuotone };
export default HandLeftBoldDuotone;
export type { HandLeftBoldDuotoneProps };

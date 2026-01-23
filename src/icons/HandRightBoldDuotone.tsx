import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, HandRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-right-bold-duotone" {...props}>
      <path fill="currentColor" d="M21 14a9 9 0 0 1-17.85 1.6l.03.09a1 1 0 0 0 1.86-.73l-.01-.04.07.24A7 7 0 0 0 19 14.02a1 1 0 0 0 2-.02v-.04z" opacity={.4} />
        <path fill="currentColor" d="M14 1a3 3 0 0 1 3 3v.17A3 3 0 0 1 21 7v7a1 1 0 1 1-2 0V7a1 1 0 1 0-2 0v4.5a1 1 0 1 1-2 0V4a1 1 0 1 0-2 0v7a1 1 0 1 1-2 0V5a1 1 0 1 0-2 0v8a1 1 0 0 1-1.86.5l-1.65-2.79a1 1 0 0 0-1.78.9l.04.1.07.13 1.22 3.12a1 1 0 1 1-1.86.73l-1.2-3.06A3 3 0 0 1 7 9.38V5a3 3 0 0 1 4.47-2.61A3 3 0 0 1 14 1" />
    </IconBase>
  ))
);

HandRightBoldDuotone.displayName = 'HandRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { HandRightBoldDuotone, HandRightBoldDuotone as HandRightBoldDuotoneIcon, HandRightBoldDuotone as SiHandRightBoldDuotone };
export default HandRightBoldDuotone;
export type { HandRightBoldDuotoneProps };

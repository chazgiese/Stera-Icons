import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, HandRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-right-bold-duotone" {...props}>
      <path fill="currentColor" d="M5.9 14.82a6.2 6.2 0 0 0 12.31-.7l.01-.32a1 1 0 1 0 2 0 8.2 8.2 0 0 1-16.26 1.47l.03.09a1 1 0 0 0 1.92-.54" opacity={.4} />
        <path fill="currentColor" d="M13.82 2a2.8 2.8 0 0 1 2.8 2.8v.02a2.8 2.8 0 0 1 3.6 2.68v6.3a1 1 0 0 1-2 0V7.5a.8.8 0 0 0-1.6 0v4.05a1 1 0 1 1-2 0V4.8a.8.8 0 0 0-1.6 0v6.3a1 1 0 0 1-2 0V5.62a.8.8 0 0 0-1.6.08v7.2a1 1 0 0 1-1.86.5l-1.48-2.5v-.01a.8.8 0 0 0-1.1-.3.8.8 0 0 0-.3 1.1l.07.13 1.1 2.8a1 1 0 0 1-1.86.74l-1.08-2.77a2.8 2.8 0 0 1 4.51-3.22V5.7a2.8 2.8 0 0 1 4.1-2.48A2.8 2.8 0 0 1 13.81 2" />
    </IconBase>
  ))
);

HandRightBoldDuotone.displayName = 'HandRightBoldDuotone';

// Triple export pattern (lucide-react style)
export { HandRightBoldDuotone, HandRightBoldDuotone as HandRightBoldDuotoneIcon, HandRightBoldDuotone as SiHandRightBoldDuotone };
export default HandRightBoldDuotone;
export type { HandRightBoldDuotoneProps };

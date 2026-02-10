import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandRightFillDuotone = memo(
  forwardRef<SVGSVGElement, HandRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-right-fill-duotone" {...props}>
      <path fill="currentColor" d="M13.82 4c.45 0 .8.36.8.8v6.75a1 1 0 0 0 2 0V7.5a.8.8 0 0 1 1.6 0v6.3a6.2 6.2 0 0 1-12.34.92l-.03-.1-1.1-2.8-.06-.13a.8.8 0 0 1 1.38-.8l1.5 2.52a1 1 0 0 0 1.85-.51V5.7a.8.8 0 0 1 1.6-.08v5.48a1 1 0 0 0 2 0V4.8c0-.44.36-.8.8-.8" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M13.82 2a2.8 2.8 0 0 1 2.8 2.8v.02a2.8 2.8 0 0 1 3.6 2.68v6.3a8.2 8.2 0 0 1-16.26 1.47L2.9 12.59a2.8 2.8 0 0 1 4.51-3.22V5.7a2.8 2.8 0 0 1 4.1-2.48A2.8 2.8 0 0 1 13.81 2m0 2a.8.8 0 0 0-.8.8v6.3a1 1 0 0 1-2 0V5.62a.8.8 0 0 0-1.6.08v7.2a1 1 0 0 1-1.86.5l-1.48-2.5v-.01a.8.8 0 0 0-1.1-.3.8.8 0 0 0-.3 1.1l.07.13 1.1 2.8.03.1.03.1a6.2 6.2 0 0 0 12.31-1.02V7.5a.8.8 0 0 0-1.6 0v4.05a1 1 0 1 1-2 0V4.8a.8.8 0 0 0-.8-.8" clipRule="evenodd" />
    </IconBase>
  ))
);

HandRightFillDuotone.displayName = 'HandRightFillDuotone';

// Triple export pattern (lucide-react style)
export { HandRightFillDuotone, HandRightFillDuotone as HandRightFillDuotoneIcon, HandRightFillDuotone as SiHandRightFillDuotone };
export default HandRightFillDuotone;
export type { HandRightFillDuotoneProps };

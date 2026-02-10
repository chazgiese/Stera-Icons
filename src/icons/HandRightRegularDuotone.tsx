import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, HandRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-right-duotone" {...props}>
      <path fill="currentColor" d="M19.97 13.8A7.95 7.95 0 0 1 4.2 15.2l.02.06a.75.75 0 0 0 1.4-.54v-.01l.04.16a6.45 6.45 0 0 0 12.8-.74l.01-.33a.75.75 0 0 0 1.5 0" opacity={.4} />
        <path fill="currentColor" d="M13.82 2.25c1.41 0 2.55 1.14 2.55 2.55v.38a2.54 2.54 0 0 1 3.6 2.32v6.3a.75.75 0 0 1-1.5 0V7.5a1.05 1.05 0 0 0-2.1 0v4.05a.75.75 0 0 1-1.5 0V4.8a1.05 1.05 0 0 0-2.1 0v6.3a.75.75 0 0 1-1.5 0V5.6a1.05 1.05 0 0 0-2.1.1v7.2a.75.75 0 0 1-1.4.38L6.3 10.77a1.05 1.05 0 1 0-1.82 1.04l.05.1 1.1 2.8a.75.75 0 1 1-1.4.55l-1.09-2.78A2.55 2.55 0 0 1 7.58 10l.1.15V5.7a2.55 2.55 0 0 1 3.92-2.14 2.6 2.6 0 0 1 2.22-1.31" />
    </IconBase>
  ))
);

HandRightRegularDuotone.displayName = 'HandRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { HandRightRegularDuotone, HandRightRegularDuotone as HandRightRegularDuotoneIcon, HandRightRegularDuotone as SiHandRightRegularDuotone };
export default HandRightRegularDuotone;
export type { HandRightRegularDuotoneProps };

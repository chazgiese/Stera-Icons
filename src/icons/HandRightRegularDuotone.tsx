import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HandRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, HandRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-right-duotone" {...props}>
      <path fill="currentColor" d="M14 1.25A2.75 2.75 0 0 1 16.75 4v.55a2.74 2.74 0 0 1 4 2.45v7a.75.75 0 0 1-1.5 0V7a1.25 1.25 0 0 0-2.5 0v4.5a.75.75 0 0 1-1.5 0V4a1.25 1.25 0 0 0-2.5 0v7a.75.75 0 0 1-1.5 0V5a1.25 1.25 0 0 0-2.5 0v8a.75.75 0 0 1-1.4.38l-1.64-2.8a1.25 1.25 0 0 0-2.23 1.14l.06.11.05.1 1.22 3.12a.75.75 0 0 1-1.4.55l-1.2-3.1A2.75 2.75 0 0 1 7 9.84l.25.42V5a2.75 2.75 0 0 1 4.31-2.26A2.8 2.8 0 0 1 14 1.25" />
        <path fill="currentColor" d="M20.75 14A8.75 8.75 0 0 1 3.4 15.53l.02.07a.75.75 0 1 0 1.44-.4 7.25 7.25 0 0 0 14.4-1.19.75.75 0 0 0 1.5-.01v-.02z" opacity={.4} />
    </IconBase>
  ))
);

HandRightRegularDuotone.displayName = 'HandRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { HandRightRegularDuotone, HandRightRegularDuotone as HandRightRegularDuotoneIcon, HandRightRegularDuotone as SiHandRightRegularDuotone };
export type { HandRightRegularDuotoneProps };

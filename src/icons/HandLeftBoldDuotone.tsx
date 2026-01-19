import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HandLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, HandLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-left-bold-duotone" {...props}>
      <path fill="currentColor" d="M3 14a1 1 0 0 0 2 0 7 7 0 0 0 13.9 1.17 1 1 0 0 0 1.92.52l.04-.1A9 9 0 0 1 3 14v-.03z" opacity={.4} />
        <path fill="currentColor" d="M10 1a3 3 0 0 1 2.53 1.39A3 3 0 0 1 17 5v4.38a3 3 0 0 1 5.02 3.25l-1.2 3.06a1 1 0 1 1-1.86-.73l1.22-3.12.07-.13.04-.1a1 1 0 0 0-1.78-.9l-1.65 2.8A1 1 0 0 1 15 13V5a1 1 0 0 0-2 0v6a1 1 0 0 1-2 0V4a1 1 0 0 0-2 0v7.5a1 1 0 0 1-2 0V7a1 1 0 0 0-2 0v7a1 1 0 0 1-2 0V7a3 3 0 0 1 4-2.83V4a3 3 0 0 1 3-3" />
    </IconBase>
  ))
);

HandLeftBoldDuotone.displayName = 'HandLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { HandLeftBoldDuotone, HandLeftBoldDuotone as HandLeftBoldDuotoneIcon, HandLeftBoldDuotone as SiHandLeftBoldDuotone };
export default HandLeftBoldDuotone;
export type { HandLeftBoldDuotoneProps };

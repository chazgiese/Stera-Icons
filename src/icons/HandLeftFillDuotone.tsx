import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HandLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, HandLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-left-fill-duotone" {...props}>
      <path fill="currentColor" d="M10 3a1 1 0 0 1 1 1v7a1 1 0 0 0 2 0V5a1 1 0 0 1 2 0v8a1 1 0 0 0 1.86.5l1.65-2.79a1 1 0 0 1 1.78.9l-.04.1-.07.13-1.22 3.12-.03.1-.03.1A7 7 0 0 1 5 14V7a1 1 0 0 1 2 0v4.5a1 1 0 0 0 2 0V4a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M10 1a3 3 0 0 1 2.53 1.39A3 3 0 0 1 17 5v4.38a3 3 0 0 1 5.02 3.25l-1.16 2.97A9 9 0 0 1 3 14V7a3 3 0 0 1 4-2.83V4a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v7.5a1 1 0 0 1-2 0V7a1 1 0 0 0-2 0v7a7 7 0 0 0 13.93 1.06l.03-.1 1.22-3.12.07-.13.04-.1a1 1 0 0 0-1.78-.9l-1.65 2.8A1 1 0 0 1 15 13V5a1 1 0 0 0-2 0v6a1 1 0 0 1-2 0V4a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

HandLeftFillDuotone.displayName = 'HandLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { HandLeftFillDuotone, HandLeftFillDuotone as HandLeftFillDuotoneIcon, HandLeftFillDuotone as SiHandLeftFillDuotone };
export default HandLeftFillDuotone;
export type { HandLeftFillDuotoneProps };

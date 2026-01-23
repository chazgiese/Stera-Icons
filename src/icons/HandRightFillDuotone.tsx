import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandRightFillDuotone = memo(
  forwardRef<SVGSVGElement, HandRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-right-fill-duotone" {...props}>
      <path fill="currentColor" d="M14 3a1 1 0 0 1 1 1v7.5a1 1 0 0 0 2 0V7a1 1 0 0 1 2 0v7a7 7 0 0 1-13.93 1.06l-.03-.1-1.22-3.12-.07-.13-.04-.1a1 1 0 0 1 1.78-.9l1.65 2.8A1 1 0 0 0 9 13V5a1 1 0 0 1 2 0v6a1 1 0 0 0 2 0V4a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14 1a3 3 0 0 1 3 3v.17A3 3 0 0 1 21 7v7a9 9 0 0 1-17.86 1.6l-1.16-2.97A3 3 0 0 1 7 9.38V5a3 3 0 0 1 4.47-2.61A3 3 0 0 1 14 1m0 2a1 1 0 0 0-1 1v7a1 1 0 1 1-2 0V5a1 1 0 1 0-2 0v8a1 1 0 0 1-1.86.5l-1.65-2.79a1 1 0 0 0-1.78.9l.04.1.07.13 1.22 3.12.03.1.03.1A7 7 0 0 0 19 14V7a1 1 0 1 0-2 0v4.5a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

HandRightFillDuotone.displayName = 'HandRightFillDuotone';

// Triple export pattern (lucide-react style)
export { HandRightFillDuotone, HandRightFillDuotone as HandRightFillDuotoneIcon, HandRightFillDuotone as SiHandRightFillDuotone };
export default HandRightFillDuotone;
export type { HandRightFillDuotoneProps };

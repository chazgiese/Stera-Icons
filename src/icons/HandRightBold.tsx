import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HandRightBoldProps = Omit<IconBaseProps, 'children'>;

const HandRightBold = memo(
  forwardRef<SVGSVGElement, HandRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-right-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14 1a3 3 0 0 1 3 3v.17A3 3 0 0 1 21 7v7a9 9 0 0 1-17.86 1.6l-1.16-2.97A3 3 0 0 1 7 9.38V5a3 3 0 0 1 4.47-2.61A3 3 0 0 1 14 1m0 2a1 1 0 0 0-1 1v7a1 1 0 1 1-2 0V5a1 1 0 1 0-2 0v8a1 1 0 0 1-1.86.5l-1.65-2.79a1 1 0 0 0-1.78.9l.04.1.07.13 1.22 3.12.03.1.03.1A7 7 0 0 0 19 14V7a1 1 0 1 0-2 0v4.5a1 1 0 1 1-2 0V4a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

HandRightBold.displayName = 'HandRightBold';

// Triple export pattern (lucide-react style)
export { HandRightBold, HandRightBold as HandRightBoldIcon, HandRightBold as SiHandRightBold };
export default HandRightBold;
export type { HandRightBoldProps };

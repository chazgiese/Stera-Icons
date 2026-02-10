import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandRightBoldProps = Omit<IconBaseProps, 'children'>;

const HandRightBold = memo(
  forwardRef<SVGSVGElement, HandRightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-right-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.74 2a2.8 2.8 0 0 1 2.8 2.8v.02a2.8 2.8 0 0 1 3.6 2.68v6.3a8.2 8.2 0 0 1-16.26 1.47l-1.05-2.68a2.8 2.8 0 0 1 4.51-3.22V5.7a2.8 2.8 0 0 1 4.1-2.48A2.8 2.8 0 0 1 13.73 2m0 2a.8.8 0 0 0-.8.8v6.3a1 1 0 0 1-2 0V5.62a.8.8 0 0 0-1.6.08v7.2a1 1 0 0 1-1.86.5L6 10.9v-.01a.8.8 0 0 0-1.1-.3.8.8 0 0 0-.3 1.1l.07.13 1.1 2.8.03.1.03.1a6.2 6.2 0 0 0 12.31-1.02V7.5a.8.8 0 0 0-1.6 0v4.05a1 1 0 0 1-2 0V4.8a.8.8 0 0 0-.8-.8" clipRule="evenodd" />
    </IconBase>
  ))
);

HandRightBold.displayName = 'HandRightBold';

// Triple export pattern (lucide-react style)
export { HandRightBold, HandRightBold as HandRightBoldIcon, HandRightBold as SiHandRightBold };
export default HandRightBold;
export type { HandRightBoldProps };

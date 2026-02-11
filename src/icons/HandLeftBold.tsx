import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandLeftBoldProps = Omit<IconBaseProps, 'children'>;

const HandLeftBold = memo(
  forwardRef<SVGSVGElement, HandLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-left-bold" {...props}>
      <path fillRule="evenodd" d="M10.27 2c.96 0 1.8.48 2.3 1.22q.6-.31 1.3-.32a2.8 2.8 0 0 1 2.8 2.8v3.67a2.8 2.8 0 0 1 4.52 3.22l-1.05 2.68A8.2 8.2 0 0 1 3.87 13.8V7.5a2.8 2.8 0 0 1 3.6-2.68V4.8a2.8 2.8 0 0 1 2.8-2.8m0 2a.8.8 0 0 0-.8.8v6.75a1 1 0 0 1-2 0V7.5a.8.8 0 0 0-1.6 0v6.3a6.2 6.2 0 0 0 12.34.92l.03-.1 1.1-2.8q.03-.08.07-.13a.8.8 0 0 0-1.39-.8l-1.49 2.52a1 1 0 0 1-1.86-.51V5.7a.8.8 0 0 0-1.6-.08v5.48a1 1 0 0 1-2 0V4.8a.8.8 0 0 0-.8-.8" clipRule="evenodd" />
    </IconBase>
  ))
);

HandLeftBold.displayName = 'HandLeftBold';

// Triple export pattern (lucide-react style)
export { HandLeftBold, HandLeftBold as HandLeftBoldIcon, HandLeftBold as SiHandLeftBold };
export default HandLeftBold;
export type { HandLeftBoldProps };

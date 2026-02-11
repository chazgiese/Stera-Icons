import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandRightRegularProps = Omit<IconBaseProps, 'children'>;

const HandRightRegular = memo(
  forwardRef<SVGSVGElement, HandRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-right" {...props}>
      <path fillRule="evenodd" d="M13.74 2.25c1.41 0 2.55 1.14 2.55 2.55v.38a2.54 2.54 0 0 1 3.6 2.32v6.3a7.95 7.95 0 0 1-15.77 1.4l-1.07-2.72A2.55 2.55 0 0 1 7.5 10l.1.15V5.7a2.55 2.55 0 0 1 3.92-2.14 2.6 2.6 0 0 1 2.22-1.31m0 1.5c-.58 0-1.05.47-1.05 1.05v6.3a.75.75 0 0 1-1.5 0V5.6a1.05 1.05 0 0 0-2.1.1v7.2a.75.75 0 0 1-1.4.38l-1.48-2.51a1.05 1.05 0 1 0-1.82 1.04l.05.1 1.1 2.8.02.08.02.08a6.45 6.45 0 0 0 12.81-1.07V7.5a1.05 1.05 0 0 0-2.1 0v4.05a.75.75 0 0 1-1.5 0V4.8c0-.58-.47-1.05-1.05-1.05" clipRule="evenodd" />
    </IconBase>
  ))
);

HandRightRegular.displayName = 'HandRightRegular';

// Triple export pattern (lucide-react style)
export { HandRightRegular, HandRightRegular as HandRightRegularIcon, HandRightRegular as SiHandRightRegular };
export default HandRightRegular;
export type { HandRightRegularProps };

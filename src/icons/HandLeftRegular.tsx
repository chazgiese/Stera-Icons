import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandLeftRegularProps = Omit<IconBaseProps, 'children'>;

const HandLeftRegular = memo(
  forwardRef<SVGSVGElement, HandLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-left" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.27 2.25c.96 0 1.79.53 2.22 1.3q.6-.39 1.38-.4c1.4 0 2.55 1.14 2.55 2.55v4.45l.09-.15a2.55 2.55 0 0 1 4.45 2.48l-1.07 2.72a7.95 7.95 0 0 1-15.77-1.4V7.5a2.55 2.55 0 0 1 3.6-2.32V4.8c0-1.4 1.14-2.55 2.55-2.55m0 1.5c-.58 0-1.05.47-1.05 1.05v6.75a.75.75 0 0 1-1.5 0V7.5a1.05 1.05 0 0 0-2.1 0v6.3a6.45 6.45 0 0 0 12.83 1l.02-.08 1.1-2.8.05-.11a1.05 1.05 0 0 0-1.82-1.05l-1.48 2.52a.75.75 0 0 1-1.4-.38V5.7a1.05 1.05 0 0 0-2.1-.1v5.5a.75.75 0 0 1-1.5 0V4.8c0-.58-.47-1.05-1.05-1.05" clipRule="evenodd" />
    </IconBase>
  ))
);

HandLeftRegular.displayName = 'HandLeftRegular';

// Triple export pattern (lucide-react style)
export { HandLeftRegular, HandLeftRegular as HandLeftRegularIcon, HandLeftRegular as SiHandLeftRegular };
export default HandLeftRegular;
export type { HandLeftRegularProps };

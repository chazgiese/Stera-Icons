import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HandLeftRegularProps = Omit<IconBaseProps, 'children'>;

const HandLeftRegular = memo(
  forwardRef<SVGSVGElement, HandLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="hand-left" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10 1.25c1.06 0 1.98.6 2.44 1.49q.68-.48 1.56-.49A2.75 2.75 0 0 1 16.75 5v5.25l.25-.42a2.75 2.75 0 0 1 4.8 2.68l-1.18 3.02A8.75 8.75 0 0 1 3.25 14V7a2.75 2.75 0 0 1 4-2.45V4A2.75 2.75 0 0 1 10 1.25m0 1.5c-.69 0-1.25.56-1.25 1.25v7.5a.75.75 0 0 1-1.5 0V7a1.25 1.25 0 0 0-2.5 0v7a7.25 7.25 0 0 0 14.42 1.12l.02-.07 1.22-3.12.05-.1.06-.11a1.25 1.25 0 0 0-2.22-1.14l-1.65 2.8a.75.75 0 0 1-1.4-.38V5a1.25 1.25 0 0 0-2.5 0v6a.75.75 0 0 1-1.5 0V4c0-.69-.56-1.25-1.25-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

HandLeftRegular.displayName = 'HandLeftRegular';

// Triple export pattern (lucide-react style)
export { HandLeftRegular, HandLeftRegular as HandLeftRegularIcon, HandLeftRegular as SiHandLeftRegular };
export type { HandLeftRegularProps };

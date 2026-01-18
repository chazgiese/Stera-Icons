import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ForwardFillProps = Omit<IconBaseProps, 'children'>;

const ForwardFill = memo(
  forwardRef<SVGSVGElement, ForwardFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12.62 3.08a1 1 0 0 1 1.09.21l8 8a1 1 0 0 1 0 1.42l-8 8A1 1 0 0 1 12 20v-4.5h-1a8 8 0 0 0-5.58 2 7 7 0 0 0-1.5 1.89v.02A1 1 0 0 1 2 19c0-3.8.62-6.56 2.51-8.3C6.21 9.14 8.73 8.6 12 8.51V4a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

ForwardFill.displayName = 'ForwardFill';

// Triple export pattern (lucide-react style)
export { ForwardFill, ForwardFill as ForwardFillIcon, ForwardFill as SiForwardFill };
export type { ForwardFillProps };

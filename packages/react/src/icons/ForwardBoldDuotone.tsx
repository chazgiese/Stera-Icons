import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ForwardBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ForwardBoldDuotone = memo(
  forwardRef<SVGSVGElement, ForwardBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 9.5a1 1 0 0 0 1 1c-3.73 0-5.88.52-7.14 1.67-.83.77-1.38 1.93-1.66 3.73a10 10 0 0 1 6.8-2.4h2a1 1 0 0 0-1 1v1h-1a8 8 0 0 0-5.58 2 7 7 0 0 0-1.5 1.89v.02A1 1 0 0 1 2 19c0-3.8.62-6.56 2.51-8.3C6.21 9.14 8.73 8.6 12 8.51z" opacity={.4} />
        <path fill="currentColor" d="M12.62 3.08a1 1 0 0 1 1.09.21l8 8a1 1 0 0 1 0 1.42l-8 8A1 1 0 0 1 12 20v-5.5a1 1 0 0 1 2 0v3.09L19.59 12 14 6.41V9.5a1 1 0 0 1-2 0V4a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

ForwardBoldDuotone.displayName = 'ForwardBoldDuotone';

// Triple export pattern (lucide-react style)
export { ForwardBoldDuotone, ForwardBoldDuotone as ForwardBoldDuotoneIcon, ForwardBoldDuotone as SiForwardBoldDuotone };
export type { ForwardBoldDuotoneProps };

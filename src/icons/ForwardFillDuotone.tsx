import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ForwardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ForwardFillDuotone = memo(
  forwardRef<SVGSVGElement, ForwardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="forward-fill-duotone" {...props}>
      <path fill="currentColor" d="M19.59 12 14 17.59V14.5a1 1 0 0 0-1-1h-2c-3.19 0-5.38 1.17-6.8 2.4.28-1.8.83-2.96 1.66-3.73 1.26-1.15 3.4-1.67 7.14-1.67a1 1 0 0 0 1-1V6.41z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12.62 3.08a1 1 0 0 1 1.09.21l8 8a1 1 0 0 1 0 1.42l-8 8A1 1 0 0 1 12 20v-4.5h-1a8 8 0 0 0-5.58 2 7 7 0 0 0-1.5 1.89v.02A1 1 0 0 1 2 19c0-3.8.62-6.56 2.51-8.3C6.21 9.14 8.73 8.6 12 8.51V4a1 1 0 0 1 .62-.92M14 9.5a1 1 0 0 1-1 1c-3.73 0-5.88.52-7.14 1.67-.83.77-1.38 1.93-1.66 3.73a10 10 0 0 1 6.8-2.4h2a1 1 0 0 1 1 1v3.09L19.59 12 14 6.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ForwardFillDuotone.displayName = 'ForwardFillDuotone';

// Triple export pattern (lucide-react style)
export { ForwardFillDuotone, ForwardFillDuotone as ForwardFillDuotoneIcon, ForwardFillDuotone as SiForwardFillDuotone };
export default ForwardFillDuotone;
export type { ForwardFillDuotoneProps };

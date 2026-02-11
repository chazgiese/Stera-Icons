import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PeaceBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PeaceBoldDuotone = memo(
  forwardRef<SVGSVGElement, PeaceBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="peace-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M12 4q.5 0 1 .06v7.53l5.32 5.31q-.62.8-1.42 1.42l-3.9-3.9v5.52a8 8 0 0 1-2 0V14.4l-3.9 3.9q-.8-.61-1.42-1.4L11 11.58V4.06Q11.5 4 12 4" />
    </IconBase>
  ))
);

PeaceBoldDuotone.displayName = 'PeaceBoldDuotone';

// Triple export pattern (lucide-react style)
export { PeaceBoldDuotone, PeaceBoldDuotone as PeaceBoldDuotoneIcon, PeaceBoldDuotone as SiPeaceBoldDuotone };
export default PeaceBoldDuotone;
export type { PeaceBoldDuotoneProps };

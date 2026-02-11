import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BagFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BagFillDuotone = memo(
  forwardRef<SVGSVGElement, BagFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bag-fill-duotone" {...props}>
      <path d="M14 6v1a1 1 0 1 0 2 0v-.97l.25.01a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 16.43 4 15.2v-3.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4L8 6.03V7a1 1 0 0 0 2 0V6z" opacity={.4} />
        <path d="M12 2a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 1 0-4 0v1a1 1 0 0 1-2 0V6a4 4 0 0 1 4-4" />
    </IconBase>
  ))
);

BagFillDuotone.displayName = 'BagFillDuotone';

// Triple export pattern (lucide-react style)
export { BagFillDuotone, BagFillDuotone as BagFillDuotoneIcon, BagFillDuotone as SiBagFillDuotone };
export default BagFillDuotone;
export type { BagFillDuotoneProps };

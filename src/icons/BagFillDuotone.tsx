import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BagFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BagFillDuotone = memo(
  forwardRef<SVGSVGElement, BagFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="bag-fill-duotone" {...props}>
      <path fill="currentColor" d="M15.2 6q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v5.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2v-5.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 6 8.8 6z" opacity={.4} />
        <path fill="currentColor" d="M12 3a3 3 0 0 0-3 3h-.2Q7.75 6 7 6.03V6a5 5 0 0 1 10 0v.03q-.75-.04-1.8-.03H15a3 3 0 0 0-3-3" />
    </IconBase>
  ))
);

BagFillDuotone.displayName = 'BagFillDuotone';

// Triple export pattern (lucide-react style)
export { BagFillDuotone, BagFillDuotone as BagFillDuotoneIcon, BagFillDuotone as SiBagFillDuotone };
export default BagFillDuotone;
export type { BagFillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BagFillProps = Omit<IconBaseProps, 'children'>;

const BagFill = memo(
  forwardRef<SVGSVGElement, BagFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="bag-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a4 4 0 0 1 4 4v.03l.25.01a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 16.43 4 15.2v-3.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4L8 6.03V6a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

BagFill.displayName = 'BagFill';

// Triple export pattern (lucide-react style)
export { BagFill, BagFill as BagFillIcon, BagFill as SiBagFill };
export default BagFill;
export type { BagFillProps };

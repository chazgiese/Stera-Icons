import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BagFillProps = Omit<IconBaseProps, 'children'>;

const BagFill = memo(
  forwardRef<SVGSVGElement, BagFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a5 5 0 0 1 5 5v.03l.25.01a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v5.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2v-5.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4L7 6.03V6a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

BagFill.displayName = 'BagFill';

// Triple export pattern (lucide-react style)
export { BagFill, BagFill as BagFillIcon, BagFill as SiBagFill };
export type { BagFillProps };

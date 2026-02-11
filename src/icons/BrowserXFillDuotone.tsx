import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrowserXFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrowserXFillDuotone = memo(
  forwardRef<SVGSVGElement, BrowserXFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="browser-x-fill-duotone" {...props}>
      <path d="M22 13.5a1 1 0 0 0-.7.3l-2.05 2.04-2.04-2.05a1 1 0 1 0-1.42 1.42l2.05 2.04-2.05 2.04a1 1 0 0 0-.29.71H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2v-2.32h20z" opacity={0.4} />
        <path fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v.32H2V9.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM8 6.13a.87.87 0 1 0 0 1.75h8a.87.87 0 1 0 0-1.75z" clipRule="evenodd" opacity={0.4} />
        <path d="M21.3 13.8a1 1 0 1 1 1.4 1.4l-2.04 2.05 2.05 2.04a1 1 0 1 1-1.42 1.42l-2.04-2.05-2.04 2.05a1 1 0 1 1-1.42-1.42l2.05-2.04-2.05-2.04a1 1 0 1 1 1.42-1.42l2.04 2.05zM22 11.88H2v-1.76h20zM16 6.13a.88.88 0 0 1 0 1.75H8a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

BrowserXFillDuotone.displayName = 'BrowserXFillDuotone';

// Triple export pattern (lucide-react style)
export { BrowserXFillDuotone, BrowserXFillDuotone as BrowserXFillDuotoneIcon, BrowserXFillDuotone as SiBrowserXFillDuotone };
export default BrowserXFillDuotone;
export type { BrowserXFillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrowserPlusFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrowserPlusFillDuotone = memo(
  forwardRef<SVGSVGElement, BrowserPlusFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="browser-plus-fill-duotone" {...props}>
      <path d="M22 14.2q0 1.05-.03 1.8H20v-2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v1.97q-.75.04-1.8.03H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2v-2.32h20z" opacity={0.4} />
        <path fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v.32H2V9.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM8 6.13a.87.87 0 1 0 0 1.75h8a.87.87 0 1 0 0-1.75z" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M19 13a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1M22 11.88H2v-1.76h20zM16 6.13a.88.88 0 0 1 0 1.75H8a.87.87 0 1 1 0-1.75z" />
    </IconBase>
  ))
);

BrowserPlusFillDuotone.displayName = 'BrowserPlusFillDuotone';

// Triple export pattern (lucide-react style)
export { BrowserPlusFillDuotone, BrowserPlusFillDuotone as BrowserPlusFillDuotoneIcon, BrowserPlusFillDuotone as SiBrowserPlusFillDuotone };
export default BrowserPlusFillDuotone;
export type { BrowserPlusFillDuotoneProps };

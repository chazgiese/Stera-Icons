import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrowserFillProps = Omit<IconBaseProps, 'children'>;

const BrowserFill = memo(
  forwardRef<SVGSVGElement, BrowserFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="browser-fill" {...props}>
      <path fill="currentColor" d="M22 14.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2v-2.32h20z" />
        <path fill="currentColor" fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v.32H2V9.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM8 6.13a.87.87 0 1 0 0 1.75h8a.87.87 0 1 0 0-1.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

BrowserFill.displayName = 'BrowserFill';

// Triple export pattern (lucide-react style)
export { BrowserFill, BrowserFill as BrowserFillIcon, BrowserFill as SiBrowserFill };
export default BrowserFill;
export type { BrowserFillProps };

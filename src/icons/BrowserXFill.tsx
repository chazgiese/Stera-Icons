import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrowserXFillProps = Omit<IconBaseProps, 'children'>;

const BrowserXFill = memo(
  forwardRef<SVGSVGElement, BrowserXFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="browser-x-fill" {...props}>
      <path d="M21.3 13.8a1 1 0 1 1 1.4 1.4l-2.04 2.05 2.05 2.04a1 1 0 1 1-1.42 1.42l-2.04-2.05-2.04 2.05a1 1 0 1 1-1.42-1.42l2.05-2.04-2.05-2.04a1 1 0 1 1 1.42-1.42l2.04 2.05z" />
        <path fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05V11a1 1 0 0 1-1 1H4v2.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h5.32a1 1 0 1 1 0 2H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2V9.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM8 7a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

BrowserXFill.displayName = 'BrowserXFill';

// Triple export pattern (lucide-react style)
export { BrowserXFill, BrowserXFill as BrowserXFillIcon, BrowserXFill as SiBrowserXFill };
export default BrowserXFill;
export type { BrowserXFillProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrowserXBoldProps = Omit<IconBaseProps, 'children'>;

const BrowserXBold = memo(
  forwardRef<SVGSVGElement, BrowserXBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="browser-x-bold" {...props}>
      <path d="M21.3 13.8a1 1 0 1 1 1.4 1.4l-2.04 2.05 2.05 2.04a1 1 0 1 1-1.42 1.42l-2.04-2.05-2.04 2.05a1 1 0 1 1-1.42-1.42l2.05-2.04-2.05-2.04a1 1 0 1 1 1.42-1.42l2.04 2.05zM16 7a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z" />
        <path fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05V11a1 1 0 0 1-1 1H4v2.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h5.32a1 1 0 1 1 0 2H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2V9.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM7.8 6c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 4 9.8v.2h16v-.2c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C17.64 6 17.06 6 16.2 6z" clipRule="evenodd" />
    </IconBase>
  ))
);

BrowserXBold.displayName = 'BrowserXBold';

// Triple export pattern (lucide-react style)
export { BrowserXBold, BrowserXBold as BrowserXBoldIcon, BrowserXBold as SiBrowserXBold };
export default BrowserXBold;
export type { BrowserXBoldProps };

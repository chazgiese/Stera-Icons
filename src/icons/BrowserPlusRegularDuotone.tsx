import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrowserPlusRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrowserPlusRegularDuotone = memo(
  forwardRef<SVGSVGElement, BrowserPlusRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="browser-plus-duotone" {...props}>
      <path d="M16 7.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M16.2 4.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03V11c0 .41-.34.75-.75.75H3.75v2.45c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h5.32a.75.75 0 0 1 0 1.5H7.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V9.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-8.4 1.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v.45h16.5V9.8c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M19 13.25c.41 0 .75.34.75.75v2.25H22a.75.75 0 0 1 0 1.5h-2.25V20a.75.75 0 0 1-1.5 0v-2.25H16a.75.75 0 0 1 0-1.5h2.25V14c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

BrowserPlusRegularDuotone.displayName = 'BrowserPlusRegularDuotone';

// Triple export pattern (lucide-react style)
export { BrowserPlusRegularDuotone, BrowserPlusRegularDuotone as BrowserPlusRegularDuotoneIcon, BrowserPlusRegularDuotone as SiBrowserPlusRegularDuotone };
export default BrowserPlusRegularDuotone;
export type { BrowserPlusRegularDuotoneProps };

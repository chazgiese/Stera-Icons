import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BrowserXFillProps = Omit<IconBaseProps, 'children'>;

const BrowserXFill = memo(
  forwardRef<SVGSVGElement, BrowserXFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="browser-x-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M23 16q.01 1.02-.04 1.72c-.04.48-.12.94-.34 1.37a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.89.3-1.37.34q-.7.05-1.72.04H6q-1.02.01-1.72-.04a4 4 0 0 1-1.37-.34 3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.3-.89-.34-1.37Q.99 17.02 1 16v-5h22zm-8.3-2.7a1 1 0 0 0-1.4 0L12 14.58l-1.3-1.3a1 1 0 1 0-1.4 1.42L10.58 16l-1.3 1.3a1 1 0 1 0 1.42 1.4L12 17.42l1.3 1.3a1 1 0 1 0 1.4-1.42L13.42 16l1.3-1.3a1 1 0 0 0 0-1.4M18 3q1.02-.01 1.72.04c.48.04.94.12 1.37.34.66.34 1.2.87 1.53 1.53.22.43.3.89.34 1.37q.05.7.04 1.72v1H1V8q-.01-1.03.04-1.72c.04-.48.12-.94.34-1.37a3.5 3.5 0 0 1 1.53-1.53c.43-.22.89-.3 1.37-.34Q4.98 2.99 6 3zM8 5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

BrowserXFill.displayName = 'BrowserXFill';

// Triple export pattern (lucide-react style)
export { BrowserXFill, BrowserXFill as BrowserXFillIcon, BrowserXFill as SiBrowserXFill };
export type { BrowserXFillProps };

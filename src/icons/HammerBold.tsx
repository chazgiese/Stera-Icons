import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HammerBoldProps = Omit<IconBaseProps, 'children'>;

const HammerBold = memo(
  forwardRef<SVGSVGElement, HammerBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="hammer-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.5 2a1 1 0 0 1 .7.3l1 .98 1.35-.67.1-.05A1 1 0 0 1 18 2.5h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-.45-.1l-1.35-.68-1 .99-.16.13.36 8.62a3.4 3.4 0 1 1-6.8 0L9 9c0-.11-.05-.24-.24-.37a2 2 0 0 0-1.06-.3 3.6 3.6 0 0 0-2.92 1.3 1 1 0 0 1-1.76-.82C4.1 3.4 7.47 2 9 2zm-3.9 16.54a1.4 1.4 0 1 0 2.8 0L13.04 10h-2.08zM9 4c-.36 0-1.98.36-3.13 2.57q.99-.3 1.93-.26c.76.04 1.52.25 2.12.68q.56.4.86 1.01h3.3l1.21-1.2.12-.11a1 1 0 0 1 1.04-.08l1.79.89H19v-3h-.76l-1.8.9a1 1 0 0 1-1.15-.2L14.1 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

HammerBold.displayName = 'HammerBold';

// Triple export pattern (lucide-react style)
export { HammerBold, HammerBold as HammerBoldIcon, HammerBold as SiHammerBold };
export default HammerBold;
export type { HammerBoldProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WifiBoldProps = Omit<IconBaseProps, 'children'>;

const WifiBold = memo(
  forwardRef<SVGSVGElement, WifiBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="wifi-bold" {...props}>
      <path fill="currentColor" d="M12 14.25c1.21 0 2.33.4 3.25 1.07.29.21.31.66.02.96l-2.01 2.07c-.7.7-1.83.7-2.51 0l-2.02-2.07c-.29-.3-.27-.75.03-.96A5.5 5.5 0 0 1 12 14.25M12 9.25c2.55 0 4.88.94 6.7 2.5.28.24.3.7 0 1l-.66.68c-.3.3-.79.31-1.15.03a7.86 7.86 0 0 0-9.78 0c-.36.28-.86.27-1.15-.03l-.66-.68c-.3-.3-.28-.76 0-1a10.2 10.2 0 0 1 6.7-2.5" />
        <path fill="currentColor" d="M12 4.25A15 15 0 0 1 22.13 8.2c.3.26.3.71.01 1l-.66.7c-.3.3-.79.3-1.12.01a12.64 12.64 0 0 0-16.72 0 .8.8 0 0 1-1.12-.01l-.66-.7a.7.7 0 0 1 0-1A15 15 0 0 1 12 4.25" />
    </IconBase>
  ))
);

WifiBold.displayName = 'WifiBold';

// Triple export pattern (lucide-react style)
export { WifiBold, WifiBold as WifiBoldIcon, WifiBold as SiWifiBold };
export default WifiBold;
export type { WifiBoldProps };

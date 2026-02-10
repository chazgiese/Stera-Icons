import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShieldBanBoldProps = Omit<IconBaseProps, 'children'>;

const ShieldBanBold = memo(
  forwardRef<SVGSVGElement, ShieldBanBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-ban-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.73 1.66a1 1 0 0 1 .62.03l7.5 2.81a1 1 0 0 1 .65.94v5.23a12.2 12.2 0 0 1-6.77 10.96l-1.28.64a1 1 0 0 1-.9 0l-1.28-.64A12.3 12.3 0 0 1 3.5 10.67V5.43l.02-.15a1 1 0 0 1 .64-.78l7.49-2.81zM5.5 10.67c0 3.89 2.2 7.43 5.67 9.17l.83.42.83-.42c1.42-.7 2.61-1.71 3.54-2.92L5.5 7.61zm.94-4.9 11 9.43a10 10 0 0 0 1.06-4.53V6.13L12 3.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldBanBold.displayName = 'ShieldBanBold';

// Triple export pattern (lucide-react style)
export { ShieldBanBold, ShieldBanBold as ShieldBanBoldIcon, ShieldBanBold as SiShieldBanBold };
export default ShieldBanBold;
export type { ShieldBanBoldProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GiftBoxRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GiftBoxRegularDuotone = memo(
  forwardRef<SVGSVGElement, GiftBoxRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gift-box-duotone" {...props}>
      <path fillRule="evenodd" d="M17.2 3.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v6.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H6.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V8.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zM6.8 4.75c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v2.45h4.8a6.7 6.7 0 0 0 3.4 1.43l-.04.07H2.75v2.45c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.34.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.45v-4.2a8 8 0 0 0 .75-1.13 9 9 0 0 0 .75 1.14v4.19h4.45c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-2.45h-8.16l-.04-.07a6.7 6.7 0 0 0 3.4-1.43h4.8V8.8c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04h-4.45v2.8q-.43.51-.75 1.16a6 6 0 0 0-.75-1.16v-2.8z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M14.91 6.26c.75-.08 1.47.18 2.06.77q.89.92.77 2.06a3.2 3.2 0 0 1-1 1.89 6.5 6.5 0 0 1-3.69 1.7q.21.46.57 1.03a6 6 0 0 0 3.56 2.56.75.75 0 0 1-.36 1.46A7.5 7.5 0 0 1 12 13.92q-.16.3-.38.62a7.5 7.5 0 0 1-4.44 3.19.75.75 0 0 1-.36-1.46 6 6 0 0 0 3.56-2.56q.36-.57.57-1.03a6.5 6.5 0 0 1-3.7-1.7 3.2 3.2 0 0 1-.99-1.9c-.08-.74.18-1.46.77-2.05a2.5 2.5 0 0 1 2.06-.77c.71.08 1.36.47 1.89 1q.6.59 1.02 1.45.43-.86 1.02-1.45a3.2 3.2 0 0 1 1.9-1m-5.99 1.5c-.25-.03-.53.04-.83.33s-.36.58-.33.83q.03.43.56 1c.6.6 1.63 1.12 2.88 1.28a5 5 0 0 0-1.28-2.88 1.8 1.8 0 0 0-1-.56m6.16 0q-.44.03-1 .56c-.6.6-1.12 1.63-1.28 2.88a5 5 0 0 0 2.88-1.28c.37-.37.53-.72.56-1 .03-.25-.04-.53-.33-.83s-.58-.36-.83-.33" clipRule="evenodd" />
    </IconBase>
  ))
);

GiftBoxRegularDuotone.displayName = 'GiftBoxRegularDuotone';

// Triple export pattern (lucide-react style)
export { GiftBoxRegularDuotone, GiftBoxRegularDuotone as GiftBoxRegularDuotoneIcon, GiftBoxRegularDuotone as SiGiftBoxRegularDuotone };
export default GiftBoxRegularDuotone;
export type { GiftBoxRegularDuotoneProps };

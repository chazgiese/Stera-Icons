import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PhoneIncomingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PhoneIncomingFillDuotone = memo(
  forwardRef<SVGSVGElement, PhoneIncomingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="phone-incoming-fill-duotone" {...props}>
      <path fill="currentColor" d="M19.8 2.8a1 1 0 1 1 1.4 1.4L16.42 9H20a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v3.59z" opacity={.4} />
        <path fill="currentColor" d="M6.63 2.51q.47.08.77.5l.08.1.01.02.01.02L9.02 5.9q.45.8.62 1.33.18.54.04 1c-.1.31-.3.52-.48.69-.2.2-.36.3-.58.53a.7.7 0 0 0-.2.63q.08.42.5 1c.55.77 1.37 1.51 1.92 2.07.56.55 1.3 1.37 2.07 1.92q.58.42 1 .5.37.07.63-.2c.23-.22.34-.37.53-.58.17-.18.38-.38.69-.48q.46-.14 1 .04.53.17 1.33.62l2.76 1.52h.02l.01.02c.32.2.55.49.6.85.06.34-.05.66-.19.92-.27.5-.78 1-1.18 1.4a5.6 5.6 0 0 1-3.98 1.8 8 8 0 0 1-4.42-1.48 25 25 0 0 1-4.25-3.48A25 25 0 0 1 4 12.3 8 8 0 0 1 2.5 7.87a5.6 5.6 0 0 1 1.8-3.98c.4-.4.91-.91 1.41-1.18.26-.14.58-.25.92-.2" />
    </IconBase>
  ))
);

PhoneIncomingFillDuotone.displayName = 'PhoneIncomingFillDuotone';

// Triple export pattern (lucide-react style)
export { PhoneIncomingFillDuotone, PhoneIncomingFillDuotone as PhoneIncomingFillDuotoneIcon, PhoneIncomingFillDuotone as SiPhoneIncomingFillDuotone };
export default PhoneIncomingFillDuotone;
export type { PhoneIncomingFillDuotoneProps };

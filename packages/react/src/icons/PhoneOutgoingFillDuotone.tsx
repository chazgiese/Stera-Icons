import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PhoneOutgoingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PhoneOutgoingFillDuotone = memo(
  forwardRef<SVGSVGElement, PhoneOutgoingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M20 3a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41l-4.8 4.8a1 1 0 0 1-1.4-1.42L17.58 5H14a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M6.63 2.51q.48.08.77.5l.08.1.01.02.01.02L9.02 5.9q.45.8.62 1.33.18.54.04 1c-.1.31-.3.52-.48.69-.2.2-.36.3-.58.53a.7.7 0 0 0-.2.63q.08.43.5 1c.54.77 1.37 1.51 1.92 2.07.56.55 1.3 1.38 2.07 1.92q.58.42 1 .5.36.07.63-.2c.22-.22.34-.37.53-.58.17-.18.38-.38.69-.48q.46-.14 1 .04.53.17 1.33.62l2.76 1.52h.02l.01.02c.32.2.55.49.6.85.06.34-.05.66-.19.92-.27.5-.78 1-1.18 1.4a5.6 5.6 0 0 1-3.98 1.8 8 8 0 0 1-4.42-1.48 24 24 0 0 1-4.25-3.48A24 24 0 0 1 4 12.3 8 8 0 0 1 2.5 7.87a5.6 5.6 0 0 1 1.8-3.98c.4-.4.91-.91 1.41-1.18.26-.14.58-.25.92-.2" />
    </IconBase>
  ))
);

PhoneOutgoingFillDuotone.displayName = 'PhoneOutgoingFillDuotone';

export { PhoneOutgoingFillDuotone };
export type { PhoneOutgoingFillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckBadgeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckBadgeRegularDuotone = memo(
  forwardRef<SVGSVGElement, CheckBadgeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-badge-duotone" {...props}>
      <path fillRule="evenodd" d="M10.06 2.88a2.75 2.75 0 0 1 3.88 0l.93.93q.38.37.89.37h1.31a2.75 2.75 0 0 1 2.75 2.75v1.31q0 .51.37.89l.93.93a2.75 2.75 0 0 1 0 3.88l-.93.93q-.36.38-.37.89v1.31a2.75 2.75 0 0 1-2.75 2.75h-1.31q-.51 0-.89.37l-.93.93a2.75 2.75 0 0 1-3.88 0l-.93-.93a1.3 1.3 0 0 0-.89-.37H6.93a2.75 2.75 0 0 1-2.75-2.75v-1.31q0-.51-.37-.89l-.93-.93a2.75 2.75 0 0 1 0-3.88l.93-.93q.37-.38.37-.89V6.93a2.75 2.75 0 0 1 2.75-2.75h1.31q.51 0 .89-.37zm2.82 1.06a1.25 1.25 0 0 0-1.76 0l-.93.93c-.52.52-1.22.8-1.95.8H6.93c-.7 0-1.25.57-1.25 1.26v1.31c0 .73-.3 1.43-.8 1.95l-.94.93a1.25 1.25 0 0 0 0 1.76l.93.93c.52.52.8 1.22.8 1.95v1.31c0 .7.57 1.25 1.26 1.25h1.31c.73 0 1.43.3 1.95.8l.93.94c.48.48 1.28.48 1.76 0l.93-.93c.52-.52 1.22-.8 1.95-.8h1.31c.7 0 1.25-.57 1.25-1.26v-1.31c0-.73.3-1.43.8-1.95l.94-.93c.48-.48.48-1.28 0-1.76l-.93-.93a2.8 2.8 0 0 1-.8-1.95V6.93c0-.7-.57-1.25-1.26-1.25h-1.31c-.73 0-1.43-.3-1.95-.8z" clipRule="evenodd" opacity={.4} />
        <path d="M14.97 9.22a.75.75 0 0 1 1.06 1.06l-4.27 4.34-.31.3q-.16.16-.48.27-.43.12-.84-.05-.3-.15-.43-.33-.15-.16-.28-.34l-1.52-2a.75.75 0 0 1 1.2-.9l1.52 2 .03.04.04-.04z" />
    </IconBase>
  ))
);

CheckBadgeRegularDuotone.displayName = 'CheckBadgeRegularDuotone';

// Triple export pattern (lucide-react style)
export { CheckBadgeRegularDuotone, CheckBadgeRegularDuotone as CheckBadgeRegularDuotoneIcon, CheckBadgeRegularDuotone as SiCheckBadgeRegularDuotone };
export default CheckBadgeRegularDuotone;
export type { CheckBadgeRegularDuotoneProps };

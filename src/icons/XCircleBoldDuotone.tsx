import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const XCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, XCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="x-circle-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M8.3 8.3a1 1 0 0 1 1.4 0l2.3 2.29 2.3-2.29a1 1 0 0 1 1.4 1.41l-2.28 2.3 2.29 2.28a1 1 0 0 1-1.42 1.41L12 13.41l-2.3 2.3a1 1 0 0 1-1.4-1.42L10.58 12l-2.3-2.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

XCircleBoldDuotone.displayName = 'XCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { XCircleBoldDuotone, XCircleBoldDuotone as XCircleBoldDuotoneIcon, XCircleBoldDuotone as SiXCircleBoldDuotone };
export default XCircleBoldDuotone;
export type { XCircleBoldDuotoneProps };

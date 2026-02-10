import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const XCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, XCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="x-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M9.7 8.3a1 1 0 0 0-1.4 1.4l2.29 2.3-2.3 2.3a1 1 0 0 0 1.42 1.4l2.3-2.29 2.28 2.3a1 1 0 0 0 1.42-1.42L13.4 12l2.3-2.29a1 1 0 0 0-1.42-1.41L12 10.59z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M8.3 8.3a1 1 0 0 1 1.4 0l2.3 2.29 2.3-2.29a1 1 0 0 1 1.4 1.41l-2.28 2.3 2.29 2.28a1 1 0 0 1-1.42 1.41L12 13.41l-2.3 2.3a1 1 0 0 1-1.4-1.42L10.58 12l-2.3-2.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

XCircleFillDuotone.displayName = 'XCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { XCircleFillDuotone, XCircleFillDuotone as XCircleFillDuotoneIcon, XCircleFillDuotone as SiXCircleFillDuotone };
export default XCircleFillDuotone;
export type { XCircleFillDuotoneProps };

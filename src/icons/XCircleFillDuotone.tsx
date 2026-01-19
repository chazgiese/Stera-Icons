import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type XCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const XCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, XCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="x-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M9.2 7.8a1 1 0 0 0-1.4 1.4l2.79 2.8-2.8 2.8a1 1 0 0 0 1.42 1.4l2.8-2.79 2.78 2.79a1 1 0 0 0 1.42-1.41L13.4 12l2.8-2.79a1 1 0 0 0-1.42-1.41L12 10.59z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.8 7.8a1 1 0 0 1 1.4 0l2.8 2.79 2.8-2.79a1 1 0 0 1 1.4 1.42L13.43 12l2.79 2.79a1 1 0 0 1-1.42 1.41L12 13.41l-2.8 2.8a1 1 0 0 1-1.4-1.42L10.58 12l-2.8-2.8a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

XCircleFillDuotone.displayName = 'XCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { XCircleFillDuotone, XCircleFillDuotone as XCircleFillDuotoneIcon, XCircleFillDuotone as SiXCircleFillDuotone };
export default XCircleFillDuotone;
export type { XCircleFillDuotoneProps };

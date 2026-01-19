import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type XCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const XCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, XCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="x-circle-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.8 7.8a1 1 0 0 1 1.4 0l2.8 2.79 2.8-2.79a1 1 0 0 1 1.4 1.42L13.43 12l2.79 2.79a1 1 0 0 1-1.42 1.41L12 13.41l-2.8 2.8a1 1 0 0 1-1.4-1.42L10.58 12l-2.8-2.8a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

XCircleBoldDuotone.displayName = 'XCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { XCircleBoldDuotone, XCircleBoldDuotone as XCircleBoldDuotoneIcon, XCircleBoldDuotone as SiXCircleBoldDuotone };
export default XCircleBoldDuotone;
export type { XCircleBoldDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XCircleFillProps = Omit<IconBaseProps, 'children'>;

const XCircleFill = memo(
  forwardRef<SVGSVGElement, XCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="x-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M9.7 8.3a1 1 0 0 0-1.4 1.4l2.29 2.3-2.3 2.3a1 1 0 0 0 1.42 1.4l2.3-2.29 2.28 2.3a1 1 0 0 0 1.42-1.42L13.4 12l2.3-2.29a1 1 0 0 0-1.42-1.41L12 10.59z" clipRule="evenodd" />
    </IconBase>
  ))
);

XCircleFill.displayName = 'XCircleFill';

// Triple export pattern (lucide-react style)
export { XCircleFill, XCircleFill as XCircleFillIcon, XCircleFill as SiXCircleFill };
export default XCircleFill;
export type { XCircleFillProps };

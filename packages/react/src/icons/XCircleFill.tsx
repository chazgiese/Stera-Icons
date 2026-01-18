import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type XCircleFillProps = Omit<IconBaseProps, 'children'>;

const XCircleFill = memo(
  forwardRef<SVGSVGElement, XCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M9.2 7.8a1 1 0 0 0-1.4 1.4l2.79 2.8-2.8 2.8a1 1 0 0 0 1.42 1.4l2.8-2.79 2.78 2.79a1 1 0 0 0 1.42-1.41L13.4 12l2.8-2.79a1 1 0 0 0-1.42-1.41L12 10.59z" clipRule="evenodd" />
    </IconBase>
  ))
);

XCircleFill.displayName = 'XCircleFill';

// Triple export pattern (lucide-react style)
export { XCircleFill, XCircleFill as XCircleFillIcon, XCircleFill as SiXCircleFill };
export type { XCircleFillProps };

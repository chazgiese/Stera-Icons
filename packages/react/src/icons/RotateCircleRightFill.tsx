import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateCircleRightFillProps = Omit<IconBaseProps, 'children'>;

const RotateCircleRightFill = memo(
  forwardRef<SVGSVGElement, RotateCircleRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22m.3 4.3a1 1 0 0 1 1.4 0l2.94 2.92a1.1 1.1 0 0 1 0 1.56L13.7 12.7a1 1 0 1 1-1.42-1.42L13.6 10H11.5a3 3 0 1 0 2.45 4.73 1 1 0 1 1 1.63 1.16A5 5 0 1 1 11.5 8h2.09l-1.3-1.3a1 1 0 0 1 0-1.4" clipRule="evenodd" />
    </IconBase>
  ))
);

RotateCircleRightFill.displayName = 'RotateCircleRightFill';

// Triple export pattern (lucide-react style)
export { RotateCircleRightFill, RotateCircleRightFill as RotateCircleRightFillIcon, RotateCircleRightFill as SiRotateCircleRightFill };
export type { RotateCircleRightFillProps };

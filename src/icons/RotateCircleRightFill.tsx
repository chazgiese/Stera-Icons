import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleRightFillProps = Omit<IconBaseProps, 'children'>;

const RotateCircleRightFill = memo(
  forwardRef<SVGSVGElement, RotateCircleRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-circle-right-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m2.2 4.3a1 1 0 1 0-1.4 1.4l.79.8h-1.84a4.75 4.75 0 1 0 3.88 7.5A1 1 0 0 0 14 14.83a2.75 2.75 0 1 1-2.25-4.34h1.84l-.8.8a1 1 0 1 0 1.42 1.4l2.43-2.42a1.1 1.1 0 0 0 0-1.56z" clipRule="evenodd" />
    </IconBase>
  ))
);

RotateCircleRightFill.displayName = 'RotateCircleRightFill';

// Triple export pattern (lucide-react style)
export { RotateCircleRightFill, RotateCircleRightFill as RotateCircleRightFillIcon, RotateCircleRightFill as SiRotateCircleRightFill };
export default RotateCircleRightFill;
export type { RotateCircleRightFillProps };

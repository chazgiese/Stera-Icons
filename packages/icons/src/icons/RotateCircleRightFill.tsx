import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleRightFillProps = Omit<IconBaseProps, 'children'>;

const RotateCircleRightFill = memo(
  forwardRef<SVGSVGElement, RotateCircleRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m2.12 4.63c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l1 1h-2.13c-2.55 0-4.62 2.08-4.62 4.63s2.07 4.63 4.62 4.63c1.56 0 2.94-.78 3.78-1.96.28-.4.18-.94-.21-1.22-.4-.28-.94-.19-1.22.2-.52.75-1.38 1.22-2.35 1.22-1.59 0-2.87-1.28-2.87-2.87s1.28-2.87 2.87-2.87h2.14l-1 1c-.35.34-.35.9 0 1.24.33.34.89.34 1.23 0l2.43-2.43c.38-.38.38-1 0-1.38z" clipRule="evenodd" />
    </IconBase>
  ))
);

RotateCircleRightFill.displayName = 'RotateCircleRightFill';

// Triple export pattern
export { RotateCircleRightFill, RotateCircleRightFill as RotateCircleRightFillIcon, RotateCircleRightFill as SiRotateCircleRightFill };
export default RotateCircleRightFill;
export type { RotateCircleRightFillProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveBezierRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurveBezierRegularDuotone = memo(
  forwardRef<SVGSVGElement, CurveBezierRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="curve-bezier-duotone" {...props}>
      <path d="M9.36 6.25a2.8 2.8 0 0 0 .33 2.23A9.2 9.2 0 0 0 5.9 14.4a3 3 0 0 0-1.5-.08c.43-2.6 1.86-5.06 3.73-6.57H5.58a1.7 1.7 0 0 0 0-1.5zM18.42 6.25a1.7 1.7 0 0 0 0 1.5h-2.55c1.87 1.5 3.3 3.97 3.74 6.57a3 3 0 0 0-1.51.08c-.48-2.52-2-4.8-3.79-5.92a2.7 2.7 0 0 0 .33-2.23z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M5 14.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M19 14.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12 4.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path fill="currentColor" d="M4 5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M20 5.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

CurveBezierRegularDuotone.displayName = 'CurveBezierRegularDuotone';

// Triple export pattern (lucide-react style)
export { CurveBezierRegularDuotone, CurveBezierRegularDuotone as CurveBezierRegularDuotoneIcon, CurveBezierRegularDuotone as SiCurveBezierRegularDuotone };
export default CurveBezierRegularDuotone;
export type { CurveBezierRegularDuotoneProps };

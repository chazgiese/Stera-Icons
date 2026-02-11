import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveBezierRegularProps = Omit<IconBaseProps, 'children'>;

const CurveBezierRegular = memo(
  forwardRef<SVGSVGElement, CurveBezierRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="curve-bezier" {...props}>
      <path fillRule="evenodd" d="M12 4.25c1.26 0 2.32.85 2.64 2h3.78a1.75 1.75 0 1 1 0 1.5h-2.55c1.87 1.5 3.3 3.97 3.73 6.57a2.75 2.75 0 1 1-1.5.08c-.48-2.52-2-4.8-3.78-5.92a2.75 2.75 0 0 1-4.64 0A9.2 9.2 0 0 0 5.9 14.4a2.75 2.75 0 1 1-1.5-.08c.44-2.6 1.86-5.06 3.73-6.57H5.58a1.75 1.75 0 1 1 0-1.5h3.78c.32-1.15 1.38-2 2.64-2m-7 11.5a1.25 1.25 0 1 0 .04 0zm13.96 0a1.25 1.25 0 1 0 .04 0zM12 5.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CurveBezierRegular.displayName = 'CurveBezierRegular';

// Triple export pattern (lucide-react style)
export { CurveBezierRegular, CurveBezierRegular as CurveBezierRegularIcon, CurveBezierRegular as SiCurveBezierRegular };
export default CurveBezierRegular;
export type { CurveBezierRegularProps };

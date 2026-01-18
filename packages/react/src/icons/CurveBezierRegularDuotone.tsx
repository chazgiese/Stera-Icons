import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurveBezierRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurveBezierRegularDuotone = memo(
  forwardRef<SVGSVGElement, CurveBezierRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M4.58 6.75h3.58Q6.85 7.82 5.85 9.34a16 16 0 0 0-2.36 5.96 3 3 0 0 1 1.5.14 15 15 0 0 1 2.1-5.28A9 9 0 0 1 9.7 7.5a2.7 2.7 0 0 1-.34-2.24H4.58a1.7 1.7 0 0 1 0 1.5m10.07-1.5h4.77a1.7 1.7 0 0 0 0 1.5h-3.58q1.31 1.07 2.31 2.59a16 16 0 0 1 2.36 5.96 3 3 0 0 0-1.5.14 15 15 0 0 0-2.1-5.28 9 9 0 0 0-2.6-2.67 2.7 2.7 0 0 0 .34-2.24" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14.65 5.25a2.75 2.75 0 1 0-5.3 1.5 2.75 2.75 0 0 0 5.3-1.5M12 4.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" clipRule="evenodd" />
        <path fill="currentColor" d="M22.75 6a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0M4.58 5.25a1.75 1.75 0 1 0-3.16 1.5 1.75 1.75 0 0 0 3.16-1.5" />
        <path fill="currentColor" fillRule="evenodd" d="M4 15.25q-.26 0-.5.05a2.75 2.75 0 1 0 .5-.05m-.71 1.72a1.24 1.24 0 0 1 1.5.06 1.25 1.25 0 1 1-1.5-.06M20.5 15.3a2.76 2.76 0 0 0-3.25 2.7 2.75 2.75 0 1 0 3.26-2.7M18.76 18a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0" clipRule="evenodd" />
    </IconBase>
  ))
);

CurveBezierRegularDuotone.displayName = 'CurveBezierRegularDuotone';

// Triple export pattern (lucide-react style)
export { CurveBezierRegularDuotone, CurveBezierRegularDuotone as CurveBezierRegularDuotoneIcon, CurveBezierRegularDuotone as SiCurveBezierRegularDuotone };
export type { CurveBezierRegularDuotoneProps };

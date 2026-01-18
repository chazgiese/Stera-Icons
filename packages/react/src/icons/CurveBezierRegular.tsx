import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurveBezierRegularProps = Omit<IconBaseProps, 'children'>;

const CurveBezierRegular = memo(
  forwardRef<SVGSVGElement, CurveBezierRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 3.25c1.23 0 2.28.81 2.63 1.93l.01.07h4.78a1.75 1.75 0 1 1 0 1.5h-3.58q1.31 1.07 2.31 2.59a16 16 0 0 1 2.35 5.96h.05a2.75 2.75 0 1 1-1.62.17l.07-.03a15 15 0 0 0-2.1-5.28 9 9 0 0 0-2.6-2.67l-.02.05a2.75 2.75 0 0 1-4.56 0l-.03-.05a9 9 0 0 0-2.6 2.67A15 15 0 0 0 5 15.44q.05 0 .08.03a2.75 2.75 0 1 1-1.62-.16l.05-.01c.39-2.2 1.23-4.28 2.35-5.96.66-1 1.44-1.9 2.31-2.59H4.58a1.75 1.75 0 1 1 0-1.5h4.78l.01-.07A2.75 2.75 0 0 1 12 3.25m-8 13.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m16 0A1.24 1.24 0 0 0 18.75 18 1.25 1.25 0 1 0 20 16.75m-8-12A1.24 1.24 0 0 0 10.75 6 1.25 1.25 0 1 0 12 4.75" clipRule="evenodd" />
    </IconBase>
  ))
);

CurveBezierRegular.displayName = 'CurveBezierRegular';

export { CurveBezierRegular };
export type { CurveBezierRegularProps };

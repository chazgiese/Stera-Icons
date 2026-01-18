import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurveBezierBoldProps = Omit<IconBaseProps, 'children'>;

const CurveBezierBold = memo(
  forwardRef<SVGSVGElement, CurveBezierBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 3a3 3 0 0 1 2.83 2h4.44a2 2 0 1 1 0 2h-2.76q1.2 1.11 2.1 2.6c1 1.6 1.73 3.5 2.11 5.49a3 3 0 1 1-2 .2c-.34-1.7-.98-3.3-1.8-4.64a9 9 0 0 0-2.55-2.82 3 3 0 0 1-4.74 0c-.91.63-1.8 1.6-2.54 2.82a14 14 0 0 0-1.81 4.64 3 3 0 1 1-2-.2c.38-2 1.12-3.9 2.1-5.49Q6.3 8.11 7.48 7H4.74a2 2 0 1 1 0-2h4.44A3 3 0 0 1 12 3M4 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m16 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
    </IconBase>
  ))
);

CurveBezierBold.displayName = 'CurveBezierBold';

export { CurveBezierBold };
export type { CurveBezierBoldProps };

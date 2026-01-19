import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurveBezierFillProps = Omit<IconBaseProps, 'children'>;

const CurveBezierFill = memo(
  forwardRef<SVGSVGElement, CurveBezierFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="curve-bezier-fill" {...props}>
      <path fill="currentColor" d="M12 3a3 3 0 0 1 2.83 2h4.44a2 2 0 1 1 0 2h-2.76a12 12 0 0 1 1.85 2.2 16 16 0 0 1 2.36 5.89 3 3 0 1 1-2 .2 14 14 0 0 0-2.03-4.99 9 9 0 0 0-2.32-2.47 3 3 0 0 1-4.74 0q-1.23.85-2.32 2.47a14 14 0 0 0-2.03 4.99 3 3 0 1 1-2-.2 16 16 0 0 1 2.36-5.9A12 12 0 0 1 7.49 7H4.73a2 2 0 1 1 0-2h4.44A3 3 0 0 1 12 3" />
    </IconBase>
  ))
);

CurveBezierFill.displayName = 'CurveBezierFill';

// Triple export pattern (lucide-react style)
export { CurveBezierFill, CurveBezierFill as CurveBezierFillIcon, CurveBezierFill as SiCurveBezierFill };
export default CurveBezierFill;
export type { CurveBezierFillProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveBezierFillProps = Omit<IconBaseProps, 'children'>;

const CurveBezierFill = memo(
  forwardRef<SVGSVGElement, CurveBezierFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="curve-bezier-fill" {...props}>
      <path d="M12 4a3 3 0 0 1 2.83 2h3.44a2 2 0 1 1 0 2h-1.73q.58.55 1.09 1.2a11.6 11.6 0 0 1 2.2 4.92 3 3 0 1 1-2.02.13 10 10 0 0 0-1.77-3.83 7 7 0 0 0-1.66-1.6 3 3 0 0 1-4.76 0q-.89.6-1.66 1.6a10 10 0 0 0-1.77 3.83 3 3 0 1 1-2.02-.13A11.6 11.6 0 0 1 7.47 8H5.72a2 2 0 1 1 0-2h3.44A3 3 0 0 1 12 4" />
    </IconBase>
  ))
);

CurveBezierFill.displayName = 'CurveBezierFill';

// Triple export pattern (lucide-react style)
export { CurveBezierFill, CurveBezierFill as CurveBezierFillIcon, CurveBezierFill as SiCurveBezierFill };
export default CurveBezierFill;
export type { CurveBezierFillProps };

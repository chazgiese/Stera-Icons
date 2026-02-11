import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveBezierFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurveBezierFillDuotone = memo(
  forwardRef<SVGSVGElement, CurveBezierFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="curve-bezier-fill-duotone" {...props}>
      <path d="M9.17 6a3 3 0 0 0 .45 2.82q-.89.6-1.66 1.6a10 10 0 0 0-1.77 3.83 3 3 0 0 0-2.02-.13A11.6 11.6 0 0 1 7.47 8H5.72a2 2 0 0 0 0-2zM18.27 6a2 2 0 0 0 0 2h-1.73q.58.55 1.09 1.2a11.6 11.6 0 0 1 2.2 4.92 3 3 0 0 0-2.02.13 10 10 0 0 0-1.77-3.83 7 7 0 0 0-1.66-1.6A3 3 0 0 0 14.83 6z" opacity={0.4} />
        <path d="M5 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6M19 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6M12 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6M4 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M20 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

CurveBezierFillDuotone.displayName = 'CurveBezierFillDuotone';

// Triple export pattern (lucide-react style)
export { CurveBezierFillDuotone, CurveBezierFillDuotone as CurveBezierFillDuotoneIcon, CurveBezierFillDuotone as SiCurveBezierFillDuotone };
export default CurveBezierFillDuotone;
export type { CurveBezierFillDuotoneProps };

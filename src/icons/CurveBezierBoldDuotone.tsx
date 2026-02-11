import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveBezierBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurveBezierBoldDuotone = memo(
  forwardRef<SVGSVGElement, CurveBezierBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="curve-bezier-bold-duotone" {...props}>
      <path d="M9.17 6a3 3 0 0 0 .45 2.82 9 9 0 0 0-3.43 5.43 3 3 0 0 0-2.01-.13A11.4 11.4 0 0 1 7.46 8H5.73a2 2 0 0 0 0-2zM18.27 6a2 2 0 0 0 0 2h-1.73a11.4 11.4 0 0 1 3.28 6.12 3 3 0 0 0-2 .13 9 9 0 0 0-3.44-5.43A3 3 0 0 0 14.83 6z" opacity={0.4} />
        <path fillRule="evenodd" d="M5 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M19 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path d="M4 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M20 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

CurveBezierBoldDuotone.displayName = 'CurveBezierBoldDuotone';

// Triple export pattern (lucide-react style)
export { CurveBezierBoldDuotone, CurveBezierBoldDuotone as CurveBezierBoldDuotoneIcon, CurveBezierBoldDuotone as SiCurveBezierBoldDuotone };
export default CurveBezierBoldDuotone;
export type { CurveBezierBoldDuotoneProps };

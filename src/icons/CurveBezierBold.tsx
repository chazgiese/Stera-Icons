import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveBezierBoldProps = Omit<IconBaseProps, 'children'>;

const CurveBezierBold = memo(
  forwardRef<SVGSVGElement, CurveBezierBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="curve-bezier-bold" {...props}>
      <path fillRule="evenodd" d="M12 4a3 3 0 0 1 2.83 2h3.44a2 2 0 1 1 0 2h-1.73a11.4 11.4 0 0 1 3.28 6.12 3 3 0 1 1-2 .13 9 9 0 0 0-3.44-5.43 3 3 0 0 1-4.76 0 9 9 0 0 0-3.43 5.43 3 3 0 1 1-2.01-.13A11.4 11.4 0 0 1 7.46 8H5.73a2 2 0 1 1 0-2h3.44A3 3 0 0 1 12 4M5 16a1 1 0 1 0 .03 0zm13.97 0a1 1 0 1 0 .03 0zM12 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
    </IconBase>
  ))
);

CurveBezierBold.displayName = 'CurveBezierBold';

// Triple export pattern (lucide-react style)
export { CurveBezierBold, CurveBezierBold as CurveBezierBoldIcon, CurveBezierBold as SiCurveBezierBold };
export default CurveBezierBold;
export type { CurveBezierBoldProps };

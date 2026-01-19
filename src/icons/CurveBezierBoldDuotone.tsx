import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurveBezierBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurveBezierBoldDuotone = memo(
  forwardRef<SVGSVGElement, CurveBezierBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="curve-bezier-bold-duotone" {...props}>
      <path d="M9.17 5a3 3 0 0 0 .46 2.84 8 8 0 0 0-1.85 1.8 14 14 0 0 0-2.5 5.65 3 3 0 0 0-2-.2A16 16 0 0 1 6.2 8.42Q6.8 7.63 7.49 7H4.73a2 2 0 0 0 0-2zM19.27 5a2 2 0 0 0 0 2h-2.76q.7.64 1.3 1.42a16 16 0 0 1 2.9 6.67 3 3 0 0 0-1.99.2 14 14 0 0 0-2.5-5.65 8 8 0 0 0-1.85-1.8A3 3 0 0 0 14.83 5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M4 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M20 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path fill="currentColor" d="M3 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4M21 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

CurveBezierBoldDuotone.displayName = 'CurveBezierBoldDuotone';

// Triple export pattern (lucide-react style)
export { CurveBezierBoldDuotone, CurveBezierBoldDuotone as CurveBezierBoldDuotoneIcon, CurveBezierBoldDuotone as SiCurveBezierBoldDuotone };
export default CurveBezierBoldDuotone;
export type { CurveBezierBoldDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurveBezierFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurveBezierFillDuotone = memo(
  forwardRef<SVGSVGElement, CurveBezierFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="curve-bezier-fill-duotone" {...props}>
      <path d="M9.17 5a3 3 0 0 0 .46 2.83q-1.23.85-2.32 2.47a14 14 0 0 0-2.03 4.99 3 3 0 0 0-2-.2 16 16 0 0 1 2.36-5.9A12 12 0 0 1 7.49 7H4.73a2 2 0 0 0 0-2zM19.27 5a2 2 0 0 0 0 2h-2.76a12 12 0 0 1 1.85 2.2 16 16 0 0 1 2.36 5.89 3 3 0 0 0-2 .2 14 14 0 0 0-2.03-4.99 9 9 0 0 0-2.32-2.47A3 3 0 0 0 14.83 5z" opacity={0.4} />
        <path fill="currentColor" d="M4 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6M20 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6M12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6M3 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4M21 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

CurveBezierFillDuotone.displayName = 'CurveBezierFillDuotone';

// Triple export pattern (lucide-react style)
export { CurveBezierFillDuotone, CurveBezierFillDuotone as CurveBezierFillDuotoneIcon, CurveBezierFillDuotone as SiCurveBezierFillDuotone };
export type { CurveBezierFillDuotoneProps };

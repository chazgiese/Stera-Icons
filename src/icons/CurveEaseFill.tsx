import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurveEaseFillProps = Omit<IconBaseProps, 'children'>;

const CurveEaseFill = memo(
  forwardRef<SVGSVGElement, CurveEaseFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="curve-ease-fill" {...props}>
      <path fill="currentColor" d="M19 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6M21 4a1 1 0 1 1 0 2c-2.23 0-3.73.76-4.93 1.91-1.25 1.2-2.19 2.8-3.2 4.59-.99 1.72-2.05 3.6-3.55 5.04A8.7 8.7 0 0 1 3 20a1 1 0 1 1 0-2c2.23 0 3.73-.76 4.93-1.91 1.25-1.2 2.19-2.8 3.2-4.59.99-1.72 2.05-3.6 3.55-5.04A8.7 8.7 0 0 1 21 4M10.94 18a1 1 0 1 1 0 2h-.44a1 1 0 1 1 0-2zM14 18a1 1 0 0 1 0 2h-.44a1 1 0 1 1 0-2zM5 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6M10.54 4a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2h.54M13.6 4a1 1 0 0 1 0 2h-.54a1 1 0 1 1 0-2h.54" />
    </IconBase>
  ))
);

CurveEaseFill.displayName = 'CurveEaseFill';

// Triple export pattern (lucide-react style)
export { CurveEaseFill, CurveEaseFill as CurveEaseFillIcon, CurveEaseFill as SiCurveEaseFill };
export default CurveEaseFill;
export type { CurveEaseFillProps };

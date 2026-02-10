import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveEaseFillProps = Omit<IconBaseProps, 'children'>;

const CurveEaseFill = memo(
  forwardRef<SVGSVGElement, CurveEaseFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="curve-ease-fill" {...props}>
      <path fill="currentColor" d="M19 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
        <path fill="currentColor" fillRule="evenodd" d="M20 5a1 1 0 1 1 0 2c-3.54 0-5.6 2.53-7.65 5.56-.98 1.45-1.98 3.05-3.09 4.24C8.13 18.03 6.73 19 4.9 19H4a1 1 0 0 1 0-2h.9c1.04 0 1.95-.53 2.9-1.55.97-1.06 1.84-2.46 2.9-4.01C12.7 8.47 15.3 5 20 5M4.76 19h.02l-.03-.01zm-.22-1.94h-.01z" clipRule="evenodd" />
        <path fill="currentColor" d="M11.03 17a1 1 0 1 1 0 2H11a1 1 0 1 1 0-2zM14 17a1 1 0 0 1 0 2h-.03a1 1 0 1 1 0-2zM5 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6M10.03 5a1 1 0 1 1 0 2H10a1 1 0 0 1 0-2zM13 5a1 1 0 1 1 0 2h-.03a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

CurveEaseFill.displayName = 'CurveEaseFill';

// Triple export pattern (lucide-react style)
export { CurveEaseFill, CurveEaseFill as CurveEaseFillIcon, CurveEaseFill as SiCurveEaseFill };
export default CurveEaseFill;
export type { CurveEaseFillProps };

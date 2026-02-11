import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveEaseBoldProps = Omit<IconBaseProps, 'children'>;

const CurveEaseBold = memo(
  forwardRef<SVGSVGElement, CurveEaseBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="curve-ease-bold" {...props}>
      <path fillRule="evenodd" d="M19 15a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2M20 5a1 1 0 1 1 0 2c-3.54 0-5.6 2.53-7.65 5.56-.98 1.45-1.98 3.05-3.09 4.24C8.13 18.03 6.73 19 4.9 19H4a1 1 0 0 1 0-2h.9c1.04 0 1.95-.53 2.9-1.55.97-1.06 1.84-2.46 2.9-4.01C12.7 8.47 15.3 5 20 5M4.76 19h.02l-.03-.01zm-.21999999999999997-1.94h-.01z" clipRule="evenodd" />
        <path d="M11.03 17a1 1 0 1 1 0 2H11a1 1 0 1 1 0-2zM14 17a1 1 0 0 1 0 2h-.03a1 1 0 1 1 0-2z" />
        <path fillRule="evenodd" d="M5 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path d="M10.03 5a1 1 0 1 1 0 2H10a1 1 0 0 1 0-2zM13 5a1 1 0 1 1 0 2h-.03a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

CurveEaseBold.displayName = 'CurveEaseBold';

// Triple export pattern (lucide-react style)
export { CurveEaseBold, CurveEaseBold as CurveEaseBoldIcon, CurveEaseBold as SiCurveEaseBold };
export default CurveEaseBold;
export type { CurveEaseBoldProps };

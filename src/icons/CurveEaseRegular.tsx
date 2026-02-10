import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveEaseRegularProps = Omit<IconBaseProps, 'children'>;

const CurveEaseRegular = memo(
  forwardRef<SVGSVGElement, CurveEaseRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="curve-ease" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 15.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M20 5.25a.75.75 0 0 1 0 1.5c-3.69 0-5.82 2.65-7.86 5.67-.98 1.46-1.97 3.03-3.06 4.21-1.11 1.2-2.45 2.12-4.2 2.12l-.1-.01h.07-.7l-.1.01H4a.75.75 0 0 1 0-1.5h.89c1.15 0 2.12-.59 3.09-1.63 1-1.07 1.88-2.5 2.92-4.04 2-2.98 4.54-6.33 9.1-6.33M4.68 18.72h.03l-.07-.01zm-.24-.12.03.02-.04-.03zm-.17-1.02-.01.02zm.23-.22.04-.02zm.12-.06h-.01z" clipRule="evenodd" />
        <path fill="currentColor" d="M11.03 17.25a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1 0-1.5zM14 17.25a.75.75 0 0 1 0 1.5h-.03a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M5 3.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path fill="currentColor" d="M10.03 5.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM13 5.25a.75.75 0 0 1 0 1.5h-.03a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

CurveEaseRegular.displayName = 'CurveEaseRegular';

// Triple export pattern (lucide-react style)
export { CurveEaseRegular, CurveEaseRegular as CurveEaseRegularIcon, CurveEaseRegular as SiCurveEaseRegular };
export default CurveEaseRegular;
export type { CurveEaseRegularProps };

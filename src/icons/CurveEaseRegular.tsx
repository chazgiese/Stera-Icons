import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurveEaseRegularProps = Omit<IconBaseProps, 'children'>;

const CurveEaseRegular = memo(
  forwardRef<SVGSVGElement, CurveEaseRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="curve-ease" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 16.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path fill="currentColor" d="M21 4.25a.75.75 0 0 1 0 1.5c-2.3 0-3.86.8-5.1 1.98-1.29 1.22-2.24 2.87-3.25 4.64-.99 1.73-2.04 3.58-3.5 4.99A8.5 8.5 0 0 1 3 19.75a.75.75 0 0 1 0-1.5c2.3 0 3.86-.8 5.1-1.98 1.29-1.22 2.24-2.87 3.25-4.64.99-1.73 2.04-3.58 3.5-4.99A8.5 8.5 0 0 1 21 4.25M10.94 18.25a.75.75 0 0 1 0 1.5h-.44a.75.75 0 0 1 0-1.5zM14 18.25a.75.75 0 0 1 0 1.5h-.44a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M5 2.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path fill="currentColor" d="M10.44 4.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM13.5 4.25a.75.75 0 0 1 0 1.5h-.44a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

CurveEaseRegular.displayName = 'CurveEaseRegular';

// Triple export pattern (lucide-react style)
export { CurveEaseRegular, CurveEaseRegular as CurveEaseRegularIcon, CurveEaseRegular as SiCurveEaseRegular };
export default CurveEaseRegular;
export type { CurveEaseRegularProps };

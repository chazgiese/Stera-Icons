import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CurveEaseRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurveEaseRegularDuotone = memo(
  forwardRef<SVGSVGElement, CurveEaseRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.94 18.25a.75.75 0 0 1 0 1.5h-.44a.75.75 0 0 1 0-1.5zM14 18.25a.75.75 0 0 1 0 1.5h-.44a.75.75 0 0 1 0-1.5zM10.44 4.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM13.5 4.25a.75.75 0 0 1 0 1.5h-.44a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M19 16.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M21 4.25a.75.75 0 0 1 0 1.5c-4.19 0-6.61 3.13-8.91 6.66-1.11 1.71-2.21 3.53-3.44 4.9C7.41 18.7 5.93 19.75 4 19.75H3a.75.75 0 0 1 0-1.5H4c1.31 0 2.42-.7 3.53-1.94 1.12-1.25 2.13-2.93 3.3-4.72C13.08 8.12 15.91 4.25 21 4.25M3.78 19.72h.04l-.07-.01zm-.24-.12.05.02-.06-.04zm-.17-1v-.02zm.23-.24.06-.02zm.13-.06H3.7zM5 2.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CurveEaseRegularDuotone.displayName = 'CurveEaseRegularDuotone';

export { CurveEaseRegularDuotone };
export type { CurveEaseRegularDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TennisBallFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TennisBallFillDuotone = memo(
  forwardRef<SVGSVGElement, TennisBallFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tennis-ball-fill-duotone" {...props}>
      <path d="M4.62 3.84A10.96 10.96 0 0 1 19 3.51a10.98 10.98 0 0 0 0 16.98 10.96 10.96 0 0 1-14 0A10.98 10.98 0 0 0 5 3.5z" opacity={0.4} />
        <path d="M3.57 4.93a8.98 8.98 0 0 1 0 14.14 10.95 10.95 0 0 1 0-14.14M20.43 4.93a10.95 10.95 0 0 1 0 14.14 8.98 8.98 0 0 1 0-14.14" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M20.43 4.93q-.65-.77-1.43-1.42a10.98 10.98 0 0 0 0 16.98q.78-.64 1.43-1.42a8.98 8.98 0 0 1 0-14.14m-16.86 0Q4.22 4.16 5 3.51A10.98 10.98 0 0 1 5 20.5q-.78-.64-1.43-1.42a8.98 8.98 0 0 0 0-14.14" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M5 20.49A10.98 10.98 0 0 0 5 3.5q-.78.64-1.43 1.42a8.98 8.98 0 0 1 0 14.14q.65.77 1.43 1.42M19 3.51a10.98 10.98 0 0 0 0 16.98q.78-.64 1.43-1.42a8.98 8.98 0 0 1 0-14.14q-.65-.77-1.43-1.42" clipRule="evenodd" />
    </IconBase>
  ))
);

TennisBallFillDuotone.displayName = 'TennisBallFillDuotone';

// Triple export pattern (lucide-react style)
export { TennisBallFillDuotone, TennisBallFillDuotone as TennisBallFillDuotoneIcon, TennisBallFillDuotone as SiTennisBallFillDuotone };
export default TennisBallFillDuotone;
export type { TennisBallFillDuotoneProps };

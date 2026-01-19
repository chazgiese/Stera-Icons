import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TennisBallFillProps = Omit<IconBaseProps, 'children'>;

const TennisBallFill = memo(
  forwardRef<SVGSVGElement, TennisBallFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="tennis-ball-fill" {...props}>
      <path fill="currentColor" d="M12 1c2.66 0 5.1.94 7 2.51a10.98 10.98 0 0 0 0 16.98 10.96 10.96 0 0 1-14 0A10.98 10.98 0 0 0 5 3.5 11 11 0 0 1 12 1" />
        <path fill="currentColor" d="M3.57 4.93a8.98 8.98 0 0 1 0 14.14 10.95 10.95 0 0 1 0-14.14M20.43 4.93a10.95 10.95 0 0 1 0 14.14 8.98 8.98 0 0 1 0-14.14" />
    </IconBase>
  ))
);

TennisBallFill.displayName = 'TennisBallFill';

// Triple export pattern (lucide-react style)
export { TennisBallFill, TennisBallFill as TennisBallFillIcon, TennisBallFill as SiTennisBallFill };
export type { TennisBallFillProps };

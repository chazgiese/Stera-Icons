import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TennisBallRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TennisBallRegularDuotone = memo(
  forwardRef<SVGSVGElement, TennisBallRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.07 4.9a10.7 10.7 0 0 1 0 14.2A9 9 0 0 1 5 18.04 9.2 9.2 0 0 0 5 5.96 9 9 0 0 1 6.07 4.9M17.93 4.9q.57.48 1.07 1.06a9.2 9.2 0 0 0 0 12.08 9 9 0 0 1-1.07 1.06 10.7 10.7 0 0 1 0-14.2" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

TennisBallRegularDuotone.displayName = 'TennisBallRegularDuotone';

// Triple export pattern (lucide-react style)
export { TennisBallRegularDuotone, TennisBallRegularDuotone as TennisBallRegularDuotoneIcon, TennisBallRegularDuotone as SiTennisBallRegularDuotone };
export type { TennisBallRegularDuotoneProps };

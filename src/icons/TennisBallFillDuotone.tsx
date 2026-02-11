import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TennisBallFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TennisBallFillDuotone = memo(
  forwardRef<SVGSVGElement, TennisBallFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tennis-ball-fill-duotone" {...props}>
      <path d="M12 2c2.37 0 4.54.82 6.25 2.2a9.98 9.98 0 0 0 0 15.6 9.96 9.96 0 0 1-12.5 0 9.98 9.98 0 0 0 0-15.6A10 10 0 0 1 12 2" opacity={0.4} />
        <path d="M4.31 5.6a8 8 0 0 1 0 12.8 9.96 9.96 0 0 1 0-12.8M19.69 5.6a9.96 9.96 0 0 1 0 12.8 8 8 0 0 1 0-12.8" opacity={0.4} />
        <path d="M5.75 4.2a9.98 9.98 0 0 1 0 15.6q-.79-.63-1.44-1.4a8 8 0 0 0 0-12.8q.64-.77 1.44-1.4M18.25 4.2q.79.63 1.44 1.4a8 8 0 0 0 0 12.8q-.64.77-1.44 1.4a9.98 9.98 0 0 1 0-15.6" />
    </IconBase>
  ))
);

TennisBallFillDuotone.displayName = 'TennisBallFillDuotone';

// Triple export pattern (lucide-react style)
export { TennisBallFillDuotone, TennisBallFillDuotone as TennisBallFillDuotoneIcon, TennisBallFillDuotone as SiTennisBallFillDuotone };
export default TennisBallFillDuotone;
export type { TennisBallFillDuotoneProps };

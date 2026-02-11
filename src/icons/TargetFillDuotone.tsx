import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TargetFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TargetFillDuotone = memo(
  forwardRef<SVGSVGElement, TargetFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="target-fill-duotone" {...props}>
      <path d="M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 1.88a2.63 2.63 0 1 0 0 5.25 2.63 2.63 0 0 0 0-5.26" opacity={0.4} />
        <path d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16m0 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13" opacity={0.4} />
        <path d="M12 9.38a2.63 2.63 0 1 1 0 5.25 2.63 2.63 0 0 1 0-5.26" />
        <path fillRule="evenodd" d="M12 5.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13m0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

TargetFillDuotone.displayName = 'TargetFillDuotone';

// Triple export pattern (lucide-react style)
export { TargetFillDuotone, TargetFillDuotone as TargetFillDuotoneIcon, TargetFillDuotone as SiTargetFillDuotone };
export default TargetFillDuotone;
export type { TargetFillDuotoneProps };

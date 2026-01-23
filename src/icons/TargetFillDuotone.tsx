import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TargetFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TargetFillDuotone = memo(
  forwardRef<SVGSVGElement, TargetFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="target-fill-duotone" {...props}>
      <path d="M12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12m0 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6" opacity={0.4} />
        <path d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16" opacity={0.4} />
        <path fill="currentColor" d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
        <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16m0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12" clipRule="evenodd" />
    </IconBase>
  ))
);

TargetFillDuotone.displayName = 'TargetFillDuotone';

// Triple export pattern (lucide-react style)
export { TargetFillDuotone, TargetFillDuotone as TargetFillDuotoneIcon, TargetFillDuotone as SiTargetFillDuotone };
export default TargetFillDuotone;
export type { TargetFillDuotoneProps };

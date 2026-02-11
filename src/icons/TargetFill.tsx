import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TargetFillProps = Omit<IconBaseProps, 'children'>;

const TargetFill = memo(
  forwardRef<SVGSVGElement, TargetFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="target-fill" {...props}>
      <path fillRule="evenodd" d="M12 5.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13m0 3.88a2.63 2.63 0 1 0 0 5.25 2.63 2.63 0 0 0 0-5.26" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

TargetFill.displayName = 'TargetFill';

// Triple export pattern (lucide-react style)
export { TargetFill, TargetFill as TargetFillIcon, TargetFill as SiTargetFill };
export default TargetFill;
export type { TargetFillProps };

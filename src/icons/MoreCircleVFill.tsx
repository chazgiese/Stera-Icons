import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleVFillProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVFill = memo(
  forwardRef<SVGSVGElement, MoreCircleVFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-v-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleVFill.displayName = 'MoreCircleVFill';

// Triple export pattern (lucide-react style)
export { MoreCircleVFill, MoreCircleVFill as MoreCircleVFillIcon, MoreCircleVFill as SiMoreCircleVFill };
export default MoreCircleVFill;
export type { MoreCircleVFillProps };

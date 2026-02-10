import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleVRegularProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVRegular = memo(
  forwardRef<SVGSVGElement, MoreCircleVRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-v" {...props}>
      <path fill="currentColor" d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleVRegular.displayName = 'MoreCircleVRegular';

// Triple export pattern (lucide-react style)
export { MoreCircleVRegular, MoreCircleVRegular as MoreCircleVRegularIcon, MoreCircleVRegular as SiMoreCircleVRegular };
export default MoreCircleVRegular;
export type { MoreCircleVRegularProps };

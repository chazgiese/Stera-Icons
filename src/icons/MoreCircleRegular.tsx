import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleRegularProps = Omit<IconBaseProps, 'children'>;

const MoreCircleRegular = memo(
  forwardRef<SVGSVGElement, MoreCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle" {...props}>
      <path fill="currentColor" d="M7 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleRegular.displayName = 'MoreCircleRegular';

// Triple export pattern (lucide-react style)
export { MoreCircleRegular, MoreCircleRegular as MoreCircleRegularIcon, MoreCircleRegular as SiMoreCircleRegular };
export default MoreCircleRegular;
export type { MoreCircleRegularProps };

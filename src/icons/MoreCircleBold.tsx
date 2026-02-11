import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleBoldProps = Omit<IconBaseProps, 'children'>;

const MoreCircleBold = memo(
  forwardRef<SVGSVGElement, MoreCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-bold" {...props}>
      <path d="M7.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleBold.displayName = 'MoreCircleBold';

// Triple export pattern (lucide-react style)
export { MoreCircleBold, MoreCircleBold as MoreCircleBoldIcon, MoreCircleBold as SiMoreCircleBold };
export default MoreCircleBold;
export type { MoreCircleBoldProps };

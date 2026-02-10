import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreCircleVBoldProps = Omit<IconBaseProps, 'children'>;

const MoreCircleVBold = memo(
  forwardRef<SVGSVGElement, MoreCircleVBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="more-circle-v-bold" {...props}>
      <path fill="currentColor" d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreCircleVBold.displayName = 'MoreCircleVBold';

// Triple export pattern (lucide-react style)
export { MoreCircleVBold, MoreCircleVBold as MoreCircleVBoldIcon, MoreCircleVBold as SiMoreCircleVBold };
export default MoreCircleVBold;
export type { MoreCircleVBoldProps };

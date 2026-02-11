import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliBoldProps = Omit<IconBaseProps, 'children'>;

const CliBold = memo(
  forwardRef<SVGSVGElement, CliBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cli-bold" {...props}>
      <path d="M20 17.5a1 1 0 0 1 0 2h-9a1 1 0 0 1 0-2zM3.3 4.8a1 1 0 0 1 1.4 0l6 6a1 1 0 0 1 0 1.4l-6 6a1 1 0 0 1-1.4-1.4l5.29-5.3-5.3-5.3a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

CliBold.displayName = 'CliBold';

// Triple export pattern (lucide-react style)
export { CliBold, CliBold as CliBoldIcon, CliBold as SiCliBold };
export default CliBold;
export type { CliBoldProps };

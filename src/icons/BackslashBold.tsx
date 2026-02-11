import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BackslashBoldProps = Omit<IconBaseProps, 'children'>;

const BackslashBold = memo(
  forwardRef<SVGSVGElement, BackslashBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="backslash-bold" {...props}>
      <path d="M4.34 3.25a1 1 0 0 1 1.41.1l14 16a1 1 0 0 1-1.5 1.3l-14-16a1 1 0 0 1 .1-1.4" />
    </IconBase>
  ))
);

BackslashBold.displayName = 'BackslashBold';

// Triple export pattern (lucide-react style)
export { BackslashBold, BackslashBold as BackslashBoldIcon, BackslashBold as SiBackslashBold };
export default BackslashBold;
export type { BackslashBoldProps };

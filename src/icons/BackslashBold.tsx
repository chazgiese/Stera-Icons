import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BackslashBoldProps = Omit<IconBaseProps, 'children'>;

const BackslashBold = memo(
  forwardRef<SVGSVGElement, BackslashBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="backslash-bold" {...props}>
      <path fill="currentColor" d="M4.75 2.34a1 1 0 0 0-1.5 1.32l16 18a1 1 0 0 0 1.5-1.32z" />
    </IconBase>
  ))
);

BackslashBold.displayName = 'BackslashBold';

// Triple export pattern (lucide-react style)
export { BackslashBold, BackslashBold as BackslashBoldIcon, BackslashBold as SiBackslashBold };
export default BackslashBold;
export type { BackslashBoldProps };

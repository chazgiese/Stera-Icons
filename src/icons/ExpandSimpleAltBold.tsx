import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExpandSimpleAltBoldProps = Omit<IconBaseProps, 'children'>;

const ExpandSimpleAltBold = memo(
  forwardRef<SVGSVGElement, ExpandSimpleAltBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="expand-simple-alt-bold" {...props}>
      <path fill="currentColor" d="M21 14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h3.59l-4.3-4.3a1 1 0 1 1 1.42-1.4L20 18.58V15a1 1 0 0 1 1-1M9 2a1 1 0 0 1 0 2H5.41l4.3 4.3a1 1 0 1 1-1.42 1.4L4 5.42V9a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

ExpandSimpleAltBold.displayName = 'ExpandSimpleAltBold';

// Triple export pattern (lucide-react style)
export { ExpandSimpleAltBold, ExpandSimpleAltBold as ExpandSimpleAltBoldIcon, ExpandSimpleAltBold as SiExpandSimpleAltBold };
export default ExpandSimpleAltBold;
export type { ExpandSimpleAltBoldProps };

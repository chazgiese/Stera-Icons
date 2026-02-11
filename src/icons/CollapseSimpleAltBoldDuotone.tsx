import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, CollapseSimpleAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse-simple-alt-bold-duotone" {...props}>
      <path d="M16 16v1.41l4.3 4.3a1 1 0 0 0 1.4-1.42L17.42 16zM3.7 2.3a1 1 0 1 0-1.4 1.4L6.58 8H8V6.59z" opacity={0.4} />
        <path d="M15 14a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2zM9 3a1 1 0 0 0-1 1v4H4a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1" />
    </IconBase>
  ))
);

CollapseSimpleAltBoldDuotone.displayName = 'CollapseSimpleAltBoldDuotone';

// Triple export pattern (lucide-react style)
export { CollapseSimpleAltBoldDuotone, CollapseSimpleAltBoldDuotone as CollapseSimpleAltBoldDuotoneIcon, CollapseSimpleAltBoldDuotone as SiCollapseSimpleAltBoldDuotone };
export default CollapseSimpleAltBoldDuotone;
export type { CollapseSimpleAltBoldDuotoneProps };

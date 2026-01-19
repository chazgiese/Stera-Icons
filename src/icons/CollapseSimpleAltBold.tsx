import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CollapseSimpleAltBoldProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleAltBold = memo(
  forwardRef<SVGSVGElement, CollapseSimpleAltBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse-simple-alt-bold" {...props}>
      <path fill="currentColor" d="M15 14a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-2.59l4.3 4.3a1 1 0 1 0 1.4-1.42L17.42 16H20a1 1 0 1 0 0-2zM3.7 2.3a1 1 0 1 0-1.4 1.4L6.58 8H4a1 1 0 0 0 0 2h5a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v2.59z" />
    </IconBase>
  ))
);

CollapseSimpleAltBold.displayName = 'CollapseSimpleAltBold';

// Triple export pattern (lucide-react style)
export { CollapseSimpleAltBold, CollapseSimpleAltBold as CollapseSimpleAltBoldIcon, CollapseSimpleAltBold as SiCollapseSimpleAltBold };
export default CollapseSimpleAltBold;
export type { CollapseSimpleAltBoldProps };

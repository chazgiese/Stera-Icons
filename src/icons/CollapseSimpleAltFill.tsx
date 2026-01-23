import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleAltFillProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleAltFill = memo(
  forwardRef<SVGSVGElement, CollapseSimpleAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse-simple-alt-fill" {...props}>
      <path fill="currentColor" d="M15 14a1 1 0 0 0-1 1v5a1 1 0 0 0 1.7.7l1.8-1.79 2.8 2.8a1 1 0 1 0 1.4-1.42l-2.79-2.79 1.8-1.8A1 1 0 0 0 20 14zM3.7 2.3a1 1 0 1 0-1.4 1.4l2.79 2.8-1.8 1.8A1 1 0 0 0 4 10h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1.7-.7L6.5 5.08z" />
    </IconBase>
  ))
);

CollapseSimpleAltFill.displayName = 'CollapseSimpleAltFill';

// Triple export pattern (lucide-react style)
export { CollapseSimpleAltFill, CollapseSimpleAltFill as CollapseSimpleAltFillIcon, CollapseSimpleAltFill as SiCollapseSimpleAltFill };
export default CollapseSimpleAltFill;
export type { CollapseSimpleAltFillProps };

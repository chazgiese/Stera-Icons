import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleFillProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleFill = memo(
  forwardRef<SVGSVGElement, CollapseSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse-simple-fill" {...props}>
      <path d="M9 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1.7.7l-1.8-1.79-2.8 2.8a1 1 0 0 1-1.4-1.42l2.79-2.79-1.8-1.8A1 1 0 0 1 4 14zM20.3 2.3a1 1 0 1 1 1.4 1.4l-2.79 2.8 1.8 1.8A1 1 0 0 1 20 10h-5a1 1 0 0 1-1-1V4a1 1 0 0 1 1.7-.7l1.8 1.79z" />
    </IconBase>
  ))
);

CollapseSimpleFill.displayName = 'CollapseSimpleFill';

// Triple export pattern (lucide-react style)
export { CollapseSimpleFill, CollapseSimpleFill as CollapseSimpleFillIcon, CollapseSimpleFill as SiCollapseSimpleFill };
export default CollapseSimpleFill;
export type { CollapseSimpleFillProps };

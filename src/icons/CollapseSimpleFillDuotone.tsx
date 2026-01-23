import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, CollapseSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse-simple-fill-duotone" {...props}>
      <path d="m6.5 18.91-2.8 2.8a1 1 0 0 1-1.4-1.42l2.79-2.79zM20.3 2.3a1 1 0 0 1 1.4 1.4l-2.79 2.8-1.41-1.41z" opacity={0.4} />
        <path fill="currentColor" d="M9 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1.7.7l-5-5A1 1 0 0 1 4 14zM14.62 3.08a1 1 0 0 1 1.09.21l5 5A1 1 0 0 1 20 10h-5a1 1 0 0 1-1-1V4a1 1 0 0 1 .62-.92" />
    </IconBase>
  ))
);

CollapseSimpleFillDuotone.displayName = 'CollapseSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { CollapseSimpleFillDuotone, CollapseSimpleFillDuotone as CollapseSimpleFillDuotoneIcon, CollapseSimpleFillDuotone as SiCollapseSimpleFillDuotone };
export default CollapseSimpleFillDuotone;
export type { CollapseSimpleFillDuotoneProps };

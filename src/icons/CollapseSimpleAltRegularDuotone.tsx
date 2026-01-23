import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, CollapseSimpleAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse-simple-alt-duotone" {...props}>
      <path d="M15.75 15.75v1.06l4.72 4.72a.75.75 0 1 0 1.06-1.06l-4.72-4.72zM3.53 2.47a.75.75 0 1 0-1.06 1.06l4.72 4.72h1.06V7.19z" opacity={0.4} />
        <path fill="currentColor" d="M15 14.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-4.25H20a.75.75 0 0 0 0-1.5zM9 3.25a.75.75 0 0 0-.75.75v4.25H4a.75.75 0 0 0 0 1.5h5c.41 0 .75-.34.75-.75V4A.75.75 0 0 0 9 3.25" />
    </IconBase>
  ))
);

CollapseSimpleAltRegularDuotone.displayName = 'CollapseSimpleAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { CollapseSimpleAltRegularDuotone, CollapseSimpleAltRegularDuotone as CollapseSimpleAltRegularDuotoneIcon, CollapseSimpleAltRegularDuotone as SiCollapseSimpleAltRegularDuotone };
export default CollapseSimpleAltRegularDuotone;
export type { CollapseSimpleAltRegularDuotoneProps };

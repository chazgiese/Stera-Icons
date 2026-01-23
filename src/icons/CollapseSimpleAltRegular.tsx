import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CollapseSimpleAltRegularProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleAltRegular = memo(
  forwardRef<SVGSVGElement, CollapseSimpleAltRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse-simple-alt" {...props}>
      <path fill="currentColor" d="M15 14.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-3.19l4.72 4.72a.75.75 0 1 0 1.06-1.06l-4.72-4.72H20a.75.75 0 0 0 0-1.5zM3.53 2.47a.75.75 0 1 0-1.06 1.06l4.72 4.72H4a.75.75 0 0 0 0 1.5h5c.41 0 .75-.34.75-.75V4a.75.75 0 0 0-1.5 0v3.19z" />
    </IconBase>
  ))
);

CollapseSimpleAltRegular.displayName = 'CollapseSimpleAltRegular';

// Triple export pattern (lucide-react style)
export { CollapseSimpleAltRegular, CollapseSimpleAltRegular as CollapseSimpleAltRegularIcon, CollapseSimpleAltRegular as SiCollapseSimpleAltRegular };
export default CollapseSimpleAltRegular;
export type { CollapseSimpleAltRegularProps };

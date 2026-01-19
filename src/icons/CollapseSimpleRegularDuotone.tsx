import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CollapseSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, CollapseSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse-simple-duotone" {...props}>
      <path d="M8.25 15.75v1.06l-4.72 4.72a.75.75 0 1 1-1.06-1.06l4.72-4.72zM20.47 2.47a.75.75 0 1 1 1.06 1.06l-4.72 4.72h-1.06V7.19z" opacity={0.4} />
        <path fill="currentColor" d="M9 14.25c.41 0 .75.34.75.75v5a.75.75 0 0 1-1.5 0v-4.25H4a.75.75 0 0 1 0-1.5zM15 3.25c.41 0 .75.34.75.75v4.25H20a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75V4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CollapseSimpleRegularDuotone.displayName = 'CollapseSimpleRegularDuotone';

// Triple export pattern (lucide-react style)
export { CollapseSimpleRegularDuotone, CollapseSimpleRegularDuotone as CollapseSimpleRegularDuotoneIcon, CollapseSimpleRegularDuotone as SiCollapseSimpleRegularDuotone };
export default CollapseSimpleRegularDuotone;
export type { CollapseSimpleRegularDuotoneProps };

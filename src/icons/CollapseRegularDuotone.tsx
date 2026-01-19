import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CollapseRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseRegularDuotone = memo(
  forwardRef<SVGSVGElement, CollapseRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="collapse-duotone" {...props}>
      <path d="M8.25 15.75v1.06l-3.72 3.72a.75.75 0 1 1-1.06-1.06l3.72-3.72zM20.53 19.47a.75.75 0 1 1-1.06 1.06l-3.72-3.72v-1.06h1.06zM19.47 3.47a.75.75 0 1 1 1.06 1.06l-3.72 3.72h-1.06V7.19zM3.47 3.47c.3-.3.77-.3 1.06 0l3.72 3.72v1.06H7.19L3.47 4.53a.75.75 0 0 1 0-1.06" opacity={0.4} />
        <path fill="currentColor" d="M9 14.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-3.25H5a.75.75 0 0 1 0-1.5zM19 14.25a.75.75 0 0 1 0 1.5h-3.25V19a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75zM9 4.25c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75H5a.75.75 0 0 1 0-1.5h3.25V5c0-.41.34-.75.75-.75M15 4.25c.41 0 .75.34.75.75v3.25H19a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CollapseRegularDuotone.displayName = 'CollapseRegularDuotone';

// Triple export pattern (lucide-react style)
export { CollapseRegularDuotone, CollapseRegularDuotone as CollapseRegularDuotoneIcon, CollapseRegularDuotone as SiCollapseRegularDuotone };
export type { CollapseRegularDuotoneProps };

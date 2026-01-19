import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-duotone" {...props}>
      <path d="M22 17.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM22 11.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM22 5.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M4.08 16.25c.38.04.67.36.67.75v2.08a.75.75 0 0 1-.75.67H2a.75.75 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75h2.08M4.08 10.25c.38.04.67.36.67.75v2.08a.75.75 0 0 1-.75.67H2a.75.75 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75h2.08M4.08 4.25c.38.04.67.36.67.75v2.08a.75.75 0 0 1-.75.67H2A.75.75 0 0 1 1.25 7V5c0-.41.34-.75.75-.75h2.08" />
    </IconBase>
  ))
);

ListRegularDuotone.displayName = 'ListRegularDuotone';

// Triple export pattern (lucide-react style)
export { ListRegularDuotone, ListRegularDuotone as ListRegularDuotoneIcon, ListRegularDuotone as SiListRegularDuotone };
export type { ListRegularDuotoneProps };

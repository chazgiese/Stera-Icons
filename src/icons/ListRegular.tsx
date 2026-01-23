import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListRegularProps = Omit<IconBaseProps, 'children'>;

const ListRegular = memo(
  forwardRef<SVGSVGElement, ListRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="list" {...props}>
      <path fill="currentColor" d="M4.08 16.25c.38.04.67.36.67.75v2.08a.75.75 0 0 1-.75.67H2a.75.75 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75h2.08M22 17.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM4.08 10.25c.38.04.67.36.67.75v2.08a.75.75 0 0 1-.75.67H2a.75.75 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75h2.08M22 11.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM4.08 4.25c.38.04.67.36.67.75v2.08a.75.75 0 0 1-.75.67H2A.75.75 0 0 1 1.25 7V5c0-.41.34-.75.75-.75h2.08M22 5.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ListRegular.displayName = 'ListRegular';

// Triple export pattern (lucide-react style)
export { ListRegular, ListRegular as ListRegularIcon, ListRegular as SiListRegular };
export default ListRegular;
export type { ListRegularProps };

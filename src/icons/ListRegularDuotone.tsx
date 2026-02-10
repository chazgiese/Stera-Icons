import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-duotone" {...props}>
      <path d="M20 17.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM20 11.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM20 5.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M6 16.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75H4a.75.75 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75zM6 10.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75H4a.75.75 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75zM6 4.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75H4A.75.75 0 0 1 3.25 7V5c0-.41.34-.75.75-.75z" />
    </IconBase>
  ))
);

ListRegularDuotone.displayName = 'ListRegularDuotone';

// Triple export pattern (lucide-react style)
export { ListRegularDuotone, ListRegularDuotone as ListRegularDuotoneIcon, ListRegularDuotone as SiListRegularDuotone };
export default ListRegularDuotone;
export type { ListRegularDuotoneProps };

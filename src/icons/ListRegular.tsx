import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListRegularProps = Omit<IconBaseProps, 'children'>;

const ListRegular = memo(
  forwardRef<SVGSVGElement, ListRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="list" {...props}>
      <path d="M6 16.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75H4a.75.75 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75zM20 17.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM6 10.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75H4a.75.75 0 0 1-.75-.75v-2c0-.41.34-.75.75-.75zM20 11.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM6 4.25c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75H4A.75.75 0 0 1 3.25 7V5c0-.41.34-.75.75-.75zM20 5.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ListRegular.displayName = 'ListRegular';

// Triple export pattern (lucide-react style)
export { ListRegular, ListRegular as ListRegularIcon, ListRegular as SiListRegular };
export default ListRegular;
export type { ListRegularProps };

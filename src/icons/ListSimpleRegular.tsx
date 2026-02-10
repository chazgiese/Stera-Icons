import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const ListSimpleRegular = memo(
  forwardRef<SVGSVGElement, ListSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-simple" {...props}>
      <path fill="currentColor" d="M6 13.25c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75H3a.75.75 0 0 1-.75-.75v-3c0-.41.34-.75.75-.75zM21 14.75a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM6 6.25c.41 0 .75.34.75.75v3c0 .41-.34.75-.75.75H3a.75.75 0 0 1-.75-.75V7c0-.41.34-.75.75-.75zM21 7.75a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ListSimpleRegular.displayName = 'ListSimpleRegular';

// Triple export pattern (lucide-react style)
export { ListSimpleRegular, ListSimpleRegular as ListSimpleRegularIcon, ListSimpleRegular as SiListSimpleRegular };
export default ListSimpleRegular;
export type { ListSimpleRegularProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const ListSimpleRegular = memo(
  forwardRef<SVGSVGElement, ListSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-simple" {...props}>
      <path fill="currentColor" d="M5 13.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-3c0-.28.22-.5.5-.5zM22 14.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM5 6.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7c0-.28.22-.5.5-.5zM22 7.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ListSimpleRegular.displayName = 'ListSimpleRegular';

// Triple export pattern (lucide-react style)
export { ListSimpleRegular, ListSimpleRegular as ListSimpleRegularIcon, ListSimpleRegular as SiListSimpleRegular };
export default ListSimpleRegular;
export type { ListSimpleRegularProps };

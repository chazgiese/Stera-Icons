import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListExpandRegularProps = Omit<IconBaseProps, 'children'>;

const ListExpandRegular = memo(
  forwardRef<SVGSVGElement, ListExpandRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-expand" {...props}>
      <path fill="currentColor" d="M20.47 14.97a.75.75 0 0 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06L18 17.44zM11 17.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM11 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM18 4.75q.31 0 .53.22l3 3a.75.75 0 0 1-1.06 1.06L18 6.56l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.8.8 0 0 1 .53-.22M11 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ListExpandRegular.displayName = 'ListExpandRegular';

// Triple export pattern (lucide-react style)
export { ListExpandRegular, ListExpandRegular as ListExpandRegularIcon, ListExpandRegular as SiListExpandRegular };
export default ListExpandRegular;
export type { ListExpandRegularProps };

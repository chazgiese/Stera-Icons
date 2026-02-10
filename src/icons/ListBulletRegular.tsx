import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletRegularProps = Omit<IconBaseProps, 'children'>;

const ListBulletRegular = memo(
  forwardRef<SVGSVGElement, ListBulletRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-bullet" {...props}>
      <path fill="currentColor" d="M5 16.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M20 17.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM5 10.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M20 11.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM5 4.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M20 5.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ListBulletRegular.displayName = 'ListBulletRegular';

// Triple export pattern (lucide-react style)
export { ListBulletRegular, ListBulletRegular as ListBulletRegularIcon, ListBulletRegular as SiListBulletRegular };
export default ListBulletRegular;
export type { ListBulletRegularProps };

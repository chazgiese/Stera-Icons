import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const ListBulletSimpleRegular = memo(
  forwardRef<SVGSVGElement, ListBulletSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-bullet-simple" {...props}>
      <path d="M4.5 13.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5M21 14.75a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM4.5 6.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5M21 7.75a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ListBulletSimpleRegular.displayName = 'ListBulletSimpleRegular';

// Triple export pattern (lucide-react style)
export { ListBulletSimpleRegular, ListBulletSimpleRegular as ListBulletSimpleRegularIcon, ListBulletSimpleRegular as SiListBulletSimpleRegular };
export default ListBulletSimpleRegular;
export type { ListBulletSimpleRegularProps };

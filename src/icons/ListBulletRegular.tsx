import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListBulletRegularProps = Omit<IconBaseProps, 'children'>;

const ListBulletRegular = memo(
  forwardRef<SVGSVGElement, ListBulletRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-bullet" {...props}>
      <path fill="currentColor" d="M3 16.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M22 17.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM3 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M22 11.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM3 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M22 5.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ListBulletRegular.displayName = 'ListBulletRegular';

// Triple export pattern (lucide-react style)
export { ListBulletRegular, ListBulletRegular as ListBulletRegularIcon, ListBulletRegular as SiListBulletRegular };
export type { ListBulletRegularProps };

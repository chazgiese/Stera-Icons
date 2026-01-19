import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListBulletRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBulletRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListBulletRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-bullet-duotone" {...props}>
      <path d="M22 17.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM22 11.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zM22 5.25a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M3 16.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M3 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M3 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

ListBulletRegularDuotone.displayName = 'ListBulletRegularDuotone';

// Triple export pattern (lucide-react style)
export { ListBulletRegularDuotone, ListBulletRegularDuotone as ListBulletRegularDuotoneIcon, ListBulletRegularDuotone as SiListBulletRegularDuotone };
export type { ListBulletRegularDuotoneProps };

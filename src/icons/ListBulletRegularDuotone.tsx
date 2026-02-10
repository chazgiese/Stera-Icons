import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBulletRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListBulletRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-bullet-duotone" {...props}>
      <path d="M20 17.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM20 11.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM20 5.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M5 16.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M5 10.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5M5 4.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

ListBulletRegularDuotone.displayName = 'ListBulletRegularDuotone';

// Triple export pattern (lucide-react style)
export { ListBulletRegularDuotone, ListBulletRegularDuotone as ListBulletRegularDuotoneIcon, ListBulletRegularDuotone as SiListBulletRegularDuotone };
export default ListBulletRegularDuotone;
export type { ListBulletRegularDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBulletFillDuotone = memo(
  forwardRef<SVGSVGElement, ListBulletFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-bullet-fill-duotone" {...props}>
      <path d="M20 16.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 1 0-3zM20 10.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 1 0-3zM20 4.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 1 1 0-3z" opacity={0.4} />
        <path fill="currentColor" d="M5 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4M5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

ListBulletFillDuotone.displayName = 'ListBulletFillDuotone';

// Triple export pattern (lucide-react style)
export { ListBulletFillDuotone, ListBulletFillDuotone as ListBulletFillDuotoneIcon, ListBulletFillDuotone as SiListBulletFillDuotone };
export default ListBulletFillDuotone;
export type { ListBulletFillDuotoneProps };

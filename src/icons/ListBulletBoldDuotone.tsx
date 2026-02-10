import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBulletBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListBulletBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-bullet-bold-duotone" {...props}>
      <path d="M20 17a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM20 11a1 1 0 0 1 0 2H10a1 1 0 1 1 0-2zM20 5a1 1 0 1 1 0 2H10a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M5 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4M5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

ListBulletBoldDuotone.displayName = 'ListBulletBoldDuotone';

// Triple export pattern (lucide-react style)
export { ListBulletBoldDuotone, ListBulletBoldDuotone as ListBulletBoldDuotoneIcon, ListBulletBoldDuotone as SiListBulletBoldDuotone };
export default ListBulletBoldDuotone;
export type { ListBulletBoldDuotoneProps };

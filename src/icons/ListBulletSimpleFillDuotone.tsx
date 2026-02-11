import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBulletSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, ListBulletSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-bullet-simple-fill-duotone" {...props}>
      <path d="M21 14a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 1 0-3zM21 7a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 1 1 0-3z" opacity={0.4} />
        <path d="M4.5 13a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M4.5 6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" />
    </IconBase>
  ))
);

ListBulletSimpleFillDuotone.displayName = 'ListBulletSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { ListBulletSimpleFillDuotone, ListBulletSimpleFillDuotone as ListBulletSimpleFillDuotoneIcon, ListBulletSimpleFillDuotone as SiListBulletSimpleFillDuotone };
export default ListBulletSimpleFillDuotone;
export type { ListBulletSimpleFillDuotoneProps };

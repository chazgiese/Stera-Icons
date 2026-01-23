import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBulletSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListBulletSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-bullet-simple-bold-duotone" {...props}>
      <path d="M22 14.5a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM22 7.5a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M3.5 13a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3.5 6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" />
    </IconBase>
  ))
);

ListBulletSimpleBoldDuotone.displayName = 'ListBulletSimpleBoldDuotone';

// Triple export pattern (lucide-react style)
export { ListBulletSimpleBoldDuotone, ListBulletSimpleBoldDuotone as ListBulletSimpleBoldDuotoneIcon, ListBulletSimpleBoldDuotone as SiListBulletSimpleBoldDuotone };
export default ListBulletSimpleBoldDuotone;
export type { ListBulletSimpleBoldDuotoneProps };

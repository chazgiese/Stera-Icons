import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletSimpleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBulletSimpleRegularDuotone = memo(
  forwardRef<SVGSVGElement, ListBulletSimpleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-bullet-simple-duotone" {...props}>
      <path d="M22 14.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM22 7.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M3.5 13.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M3.5 6.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

ListBulletSimpleRegularDuotone.displayName = 'ListBulletSimpleRegularDuotone';

// Triple export pattern (lucide-react style)
export { ListBulletSimpleRegularDuotone, ListBulletSimpleRegularDuotone as ListBulletSimpleRegularDuotoneIcon, ListBulletSimpleRegularDuotone as SiListBulletSimpleRegularDuotone };
export default ListBulletSimpleRegularDuotone;
export type { ListBulletSimpleRegularDuotoneProps };

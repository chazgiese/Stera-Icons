import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListBulletFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBulletFillDuotone = memo(
  forwardRef<SVGSVGElement, ListBulletFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-bullet-fill-duotone" {...props}>
      <path d="M21.5 16.5a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 0 1 0-3zM21.5 10.5a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 0 1 0-3zM21.5 4.5a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 1 1 0-3z" opacity={0.4} />
        <path fill="currentColor" d="M3 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4M3 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M3 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

ListBulletFillDuotone.displayName = 'ListBulletFillDuotone';

// Triple export pattern (lucide-react style)
export { ListBulletFillDuotone, ListBulletFillDuotone as ListBulletFillDuotoneIcon, ListBulletFillDuotone as SiListBulletFillDuotone };
export type { ListBulletFillDuotoneProps };

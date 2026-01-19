import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListBulletBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBulletBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListBulletBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-bullet-bold-duotone" {...props}>
      <path d="M22 17a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM22 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM22 5a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M3 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4M3 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M3 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
    </IconBase>
  ))
);

ListBulletBoldDuotone.displayName = 'ListBulletBoldDuotone';

// Triple export pattern (lucide-react style)
export { ListBulletBoldDuotone, ListBulletBoldDuotone as ListBulletBoldDuotoneIcon, ListBulletBoldDuotone as SiListBulletBoldDuotone };
export type { ListBulletBoldDuotoneProps };

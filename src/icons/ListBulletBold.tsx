import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListBulletBoldProps = Omit<IconBaseProps, 'children'>;

const ListBulletBold = memo(
  forwardRef<SVGSVGElement, ListBulletBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-bullet-bold" {...props}>
      <path fill="currentColor" d="M3 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4M22 17a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM3 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M22 11a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM3 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4M22 5a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ListBulletBold.displayName = 'ListBulletBold';

// Triple export pattern (lucide-react style)
export { ListBulletBold, ListBulletBold as ListBulletBoldIcon, ListBulletBold as SiListBulletBold };
export default ListBulletBold;
export type { ListBulletBoldProps };

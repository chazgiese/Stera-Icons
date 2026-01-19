import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListBulletSimpleBoldProps = Omit<IconBaseProps, 'children'>;

const ListBulletSimpleBold = memo(
  forwardRef<SVGSVGElement, ListBulletSimpleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-bullet-simple-bold" {...props}>
      <path fill="currentColor" d="M3.5 13a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M22 14.5a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM3.5 6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M22 7.5a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

ListBulletSimpleBold.displayName = 'ListBulletSimpleBold';

// Triple export pattern (lucide-react style)
export { ListBulletSimpleBold, ListBulletSimpleBold as ListBulletSimpleBoldIcon, ListBulletSimpleBold as SiListBulletSimpleBold };
export type { ListBulletSimpleBoldProps };

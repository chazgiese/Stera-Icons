import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListBulletSimpleFillProps = Omit<IconBaseProps, 'children'>;

const ListBulletSimpleFill = memo(
  forwardRef<SVGSVGElement, ListBulletSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="list-bullet-simple-fill" {...props}>
      <path fill="currentColor" d="M3.5 13a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M21.5 14a1.5 1.5 0 0 1 0 3h-12a1.5 1.5 0 0 1 0-3zM3.5 6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M21.5 7a1.5 1.5 0 0 1 0 3h-12a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

ListBulletSimpleFill.displayName = 'ListBulletSimpleFill';

// Triple export pattern (lucide-react style)
export { ListBulletSimpleFill, ListBulletSimpleFill as ListBulletSimpleFillIcon, ListBulletSimpleFill as SiListBulletSimpleFill };
export type { ListBulletSimpleFillProps };

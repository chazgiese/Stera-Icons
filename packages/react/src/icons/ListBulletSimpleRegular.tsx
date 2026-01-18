import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListBulletSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const ListBulletSimpleRegular = memo(
  forwardRef<SVGSVGElement, ListBulletSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3.5 13.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M22 14.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM3.5 6.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M22 7.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

ListBulletSimpleRegular.displayName = 'ListBulletSimpleRegular';

export { ListBulletSimpleRegular };
export type { ListBulletSimpleRegularProps };

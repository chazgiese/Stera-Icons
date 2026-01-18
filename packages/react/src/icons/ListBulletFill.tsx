import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListBulletFillProps = Omit<IconBaseProps, 'children'>;

const ListBulletFill = memo(
  forwardRef<SVGSVGElement, ListBulletFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4M21.5 16.5a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 0 1 0-3zM3 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M21.5 10.5a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 0 1 0-3zM3 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4M21.5 4.5a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

ListBulletFill.displayName = 'ListBulletFill';

export { ListBulletFill };
export type { ListBulletFillProps };

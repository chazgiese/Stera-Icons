import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListBulletSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBulletSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, ListBulletSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.5 14a1.5 1.5 0 0 1 0 3h-12a1.5 1.5 0 0 1 0-3zM21.5 7a1.5 1.5 0 0 1 0 3h-12a1.5 1.5 0 1 1 0-3z" />
        <path fill="currentColor" d="M3.5 13a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3.5 6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" />
    </IconBase>
  ))
);

ListBulletSimpleFillDuotone.displayName = 'ListBulletSimpleFillDuotone';

export { ListBulletSimpleFillDuotone };
export type { ListBulletSimpleFillDuotoneProps };

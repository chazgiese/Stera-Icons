import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ListBulletSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListBulletSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListBulletSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M22 14.5a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM22 7.5a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2z" />
        <path fill="currentColor" d="M3.5 13a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3.5 6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" />
    </IconBase>
  ))
);

ListBulletSimpleBoldDuotone.displayName = 'ListBulletSimpleBoldDuotone';

export { ListBulletSimpleBoldDuotone };
export type { ListBulletSimpleBoldDuotoneProps };

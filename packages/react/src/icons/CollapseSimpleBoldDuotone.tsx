import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CollapseSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CollapseSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CollapseSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 16v1.41l-4.3 4.3a1 1 0 0 1-1.4-1.42L6.58 16zM20.3 2.3a1 1 0 0 1 1.4 1.4L17.42 8H16V6.59z" />
        <path fill="currentColor" d="M9 14a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-4H4a1 1 0 1 1 0-2zM15 3a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CollapseSimpleBoldDuotone.displayName = 'CollapseSimpleBoldDuotone';

export { CollapseSimpleBoldDuotone };
export type { CollapseSimpleBoldDuotoneProps };

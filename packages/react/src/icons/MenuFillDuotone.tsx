import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MenuFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuFillDuotone = memo(
  forwardRef<SVGSVGElement, MenuFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path fill="currentColor" d="M21 16.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

MenuFillDuotone.displayName = 'MenuFillDuotone';

// Triple export pattern (lucide-react style)
export { MenuFillDuotone, MenuFillDuotone as MenuFillDuotoneIcon, MenuFillDuotone as SiMenuFillDuotone };
export type { MenuFillDuotoneProps };

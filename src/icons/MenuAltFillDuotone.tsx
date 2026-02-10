import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuAltFillDuotone = memo(
  forwardRef<SVGSVGElement, MenuAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-alt-fill-duotone" {...props}>
      <path fill="currentColor" d="M20 10.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3z" opacity={.4} />
        <path fill="currentColor" d="M14 16.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zM20 4.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

MenuAltFillDuotone.displayName = 'MenuAltFillDuotone';

// Triple export pattern (lucide-react style)
export { MenuAltFillDuotone, MenuAltFillDuotone as MenuAltFillDuotoneIcon, MenuAltFillDuotone as SiMenuAltFillDuotone };
export default MenuAltFillDuotone;
export type { MenuAltFillDuotoneProps };

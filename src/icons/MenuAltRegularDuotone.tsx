import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuAltRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuAltRegularDuotone = memo(
  forwardRef<SVGSVGElement, MenuAltRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-alt-duotone" {...props}>
      <path fill="currentColor" d="M20 11.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M14 16.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5zM20 6.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

MenuAltRegularDuotone.displayName = 'MenuAltRegularDuotone';

// Triple export pattern (lucide-react style)
export { MenuAltRegularDuotone, MenuAltRegularDuotone as MenuAltRegularDuotoneIcon, MenuAltRegularDuotone as SiMenuAltRegularDuotone };
export default MenuAltRegularDuotone;
export type { MenuAltRegularDuotoneProps };

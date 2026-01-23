import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuRegularDuotone = memo(
  forwardRef<SVGSVGElement, MenuRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-duotone" {...props}>
      <path fill="currentColor" d="M21 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path fill="currentColor" d="M21 17.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

MenuRegularDuotone.displayName = 'MenuRegularDuotone';

// Triple export pattern (lucide-react style)
export { MenuRegularDuotone, MenuRegularDuotone as MenuRegularDuotoneIcon, MenuRegularDuotone as SiMenuRegularDuotone };
export default MenuRegularDuotone;
export type { MenuRegularDuotoneProps };

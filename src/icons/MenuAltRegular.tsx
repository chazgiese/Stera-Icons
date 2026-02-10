import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuAltRegularProps = Omit<IconBaseProps, 'children'>;

const MenuAltRegular = memo(
  forwardRef<SVGSVGElement, MenuAltRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-alt" {...props}>
      <path fill="currentColor" d="M14 16.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5zM20 11.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5zM20 6.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

MenuAltRegular.displayName = 'MenuAltRegular';

// Triple export pattern (lucide-react style)
export { MenuAltRegular, MenuAltRegular as MenuAltRegularIcon, MenuAltRegular as SiMenuAltRegular };
export default MenuAltRegular;
export type { MenuAltRegularProps };

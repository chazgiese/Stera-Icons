import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleRegularProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleRegular = memo(
  forwardRef<SVGSVGElement, MenuSimpleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-simple" {...props}>
      <path fill="currentColor" d="M14 15.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5zM20 7.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

MenuSimpleRegular.displayName = 'MenuSimpleRegular';

// Triple export pattern (lucide-react style)
export { MenuSimpleRegular, MenuSimpleRegular as MenuSimpleRegularIcon, MenuSimpleRegular as SiMenuSimpleRegular };
export default MenuSimpleRegular;
export type { MenuSimpleRegularProps };

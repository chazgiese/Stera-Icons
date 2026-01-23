import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleAltRegularProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleAltRegular = memo(
  forwardRef<SVGSVGElement, MenuSimpleAltRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-simple-alt" {...props}>
      <path fill="currentColor" d="M15 15.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 7.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

MenuSimpleAltRegular.displayName = 'MenuSimpleAltRegular';

// Triple export pattern (lucide-react style)
export { MenuSimpleAltRegular, MenuSimpleAltRegular as MenuSimpleAltRegularIcon, MenuSimpleAltRegular as SiMenuSimpleAltRegular };
export default MenuSimpleAltRegular;
export type { MenuSimpleAltRegularProps };

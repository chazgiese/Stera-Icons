import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MenuSimpleFillProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleFill = memo(
  forwardRef<SVGSVGElement, MenuSimpleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-simple-fill" {...props}>
      <path fill="currentColor" d="M14 14.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zM20 6.5a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

MenuSimpleFill.displayName = 'MenuSimpleFill';

// Triple export pattern (lucide-react style)
export { MenuSimpleFill, MenuSimpleFill as MenuSimpleFillIcon, MenuSimpleFill as SiMenuSimpleFill };
export default MenuSimpleFill;
export type { MenuSimpleFillProps };

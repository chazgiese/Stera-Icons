import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MenuAltRegularProps = Omit<IconBaseProps, 'children'>;

const MenuAltRegular = memo(
  forwardRef<SVGSVGElement, MenuAltRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="menu-alt" {...props}>
      <path fill="currentColor" d="M15 16.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 6.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

MenuAltRegular.displayName = 'MenuAltRegular';

// Triple export pattern (lucide-react style)
export { MenuAltRegular, MenuAltRegular as MenuAltRegularIcon, MenuAltRegular as SiMenuAltRegular };
export type { MenuAltRegularProps };

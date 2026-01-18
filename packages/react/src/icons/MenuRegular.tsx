import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MenuRegularProps = Omit<IconBaseProps, 'children'>;

const MenuRegular = memo(
  forwardRef<SVGSVGElement, MenuRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 17.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

MenuRegular.displayName = 'MenuRegular';

// Triple export pattern (lucide-react style)
export { MenuRegular, MenuRegular as MenuRegularIcon, MenuRegular as SiMenuRegular };
export type { MenuRegularProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MenuAltBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MenuAltBoldDuotone = memo(
  forwardRef<SVGSVGElement, MenuAltBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" opacity={.4} />
        <path fill="currentColor" d="M15 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

MenuAltBoldDuotone.displayName = 'MenuAltBoldDuotone';

export { MenuAltBoldDuotone };
export type { MenuAltBoldDuotoneProps };

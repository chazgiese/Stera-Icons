import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MenuAltBoldProps = Omit<IconBaseProps, 'children'>;

const MenuAltBold = memo(
  forwardRef<SVGSVGElement, MenuAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

MenuAltBold.displayName = 'MenuAltBold';

export { MenuAltBold };
export type { MenuAltBoldProps };

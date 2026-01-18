import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MenuSimpleAltFillProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleAltFill = memo(
  forwardRef<SVGSVGElement, MenuSimpleAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15 14.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 6.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

MenuSimpleAltFill.displayName = 'MenuSimpleAltFill';

export { MenuSimpleAltFill };
export type { MenuSimpleAltFillProps };

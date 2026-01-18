import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MenuSimpleAltBoldProps = Omit<IconBaseProps, 'children'>;

const MenuSimpleAltBold = memo(
  forwardRef<SVGSVGElement, MenuSimpleAltBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15 15a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 7a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

MenuSimpleAltBold.displayName = 'MenuSimpleAltBold';

export { MenuSimpleAltBold };
export type { MenuSimpleAltBoldProps };

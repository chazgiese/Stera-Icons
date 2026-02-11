import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonCrescentBoldProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentBold = memo(
  forwardRef<SVGSVGElement, MoonCrescentBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-crescent-bold" {...props}>
      <path fillRule="evenodd" d="M9.57 2.3a1 1 0 0 1 1.15 1.39 8 8 0 0 0 9.23 11.07 1 1 0 0 1 1.15 1.39A10 10 0 1 1 9.57 2.3M8.2 4.95A8 8 0 1 0 18.24 17H18A10 10 0 0 1 8.21 4.95" clipRule="evenodd" />
    </IconBase>
  ))
);

MoonCrescentBold.displayName = 'MoonCrescentBold';

// Triple export pattern (lucide-react style)
export { MoonCrescentBold, MoonCrescentBold as MoonCrescentBoldIcon, MoonCrescentBold as SiMoonCrescentBold };
export default MoonCrescentBold;
export type { MoonCrescentBoldProps };

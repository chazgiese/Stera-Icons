import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonCrescentFillProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentFill = memo(
  forwardRef<SVGSVGElement, MoonCrescentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-crescent-fill" {...props}>
      <path d="M9.57 2.3a1 1 0 0 1 1.15 1.39 8 8 0 0 0 9.23 11.07 1 1 0 0 1 1.15 1.39A10 10 0 1 1 9.57 2.3" />
    </IconBase>
  ))
);

MoonCrescentFill.displayName = 'MoonCrescentFill';

// Triple export pattern (lucide-react style)
export { MoonCrescentFill, MoonCrescentFill as MoonCrescentFillIcon, MoonCrescentFill as SiMoonCrescentFill };
export default MoonCrescentFill;
export type { MoonCrescentFillProps };

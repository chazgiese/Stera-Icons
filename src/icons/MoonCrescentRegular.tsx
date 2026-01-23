import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonCrescentRegularProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentRegular = memo(
  forwardRef<SVGSVGElement, MoonCrescentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-crescent" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.9 1.7a.75.75 0 0 1 .88 1.07 9.25 9.25 0 0 0 10.9 13.09.75.75 0 0 1 .88 1.06A10.75 10.75 0 1 1 8.89 1.7M7.73 3.8A9.25 9.25 0 1 0 19.3 17.67 10.74 10.74 0 0 1 7.74 3.79" clipRule="evenodd" />
    </IconBase>
  ))
);

MoonCrescentRegular.displayName = 'MoonCrescentRegular';

// Triple export pattern (lucide-react style)
export { MoonCrescentRegular, MoonCrescentRegular as MoonCrescentRegularIcon, MoonCrescentRegular as SiMoonCrescentRegular };
export default MoonCrescentRegular;
export type { MoonCrescentRegularProps };

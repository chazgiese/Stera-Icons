import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonCrescentRegularProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentRegular = memo(
  forwardRef<SVGSVGElement, MoonCrescentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-crescent" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.63 2.54a.75.75 0 0 1 .86 1.04A8.25 8.25 0 0 0 20.01 15a.75.75 0 0 1 .86 1.04A9.75 9.75 0 1 1 9.63 2.54M8.58 4.5a8.25 8.25 0 1 0 10.18 12.23A9.72 9.72 0 0 1 8.58 4.49" clipRule="evenodd" />
    </IconBase>
  ))
);

MoonCrescentRegular.displayName = 'MoonCrescentRegular';

// Triple export pattern (lucide-react style)
export { MoonCrescentRegular, MoonCrescentRegular as MoonCrescentRegularIcon, MoonCrescentRegular as SiMoonCrescentRegular };
export default MoonCrescentRegular;
export type { MoonCrescentRegularProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoonCrescentBoldProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentBold = memo(
  forwardRef<SVGSVGElement, MoonCrescentBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-crescent-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.82 1.47A1 1 0 0 1 10 2.88a9 9 0 0 0 10.6 12.73 1 1 0 0 1 1.18 1.42A11 11 0 1 1 8.82 1.47M7.33 4.3a9 9 0 1 0 11.4 13.67A10.97 10.97 0 0 1 7.32 4.3" clipRule="evenodd" />
    </IconBase>
  ))
);

MoonCrescentBold.displayName = 'MoonCrescentBold';

// Triple export pattern (lucide-react style)
export { MoonCrescentBold, MoonCrescentBold as MoonCrescentBoldIcon, MoonCrescentBold as SiMoonCrescentBold };
export type { MoonCrescentBoldProps };

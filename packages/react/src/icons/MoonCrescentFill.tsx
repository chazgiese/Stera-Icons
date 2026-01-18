import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MoonCrescentFillProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentFill = memo(
  forwardRef<SVGSVGElement, MoonCrescentFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M8.82 1.47A1 1 0 0 1 10 2.88a9 9 0 0 0 10.6 12.73 1 1 0 0 1 1.18 1.42A11 11 0 1 1 8.82 1.47" />
    </IconBase>
  ))
);

MoonCrescentFill.displayName = 'MoonCrescentFill';

// Triple export pattern (lucide-react style)
export { MoonCrescentFill, MoonCrescentFill as MoonCrescentFillIcon, MoonCrescentFill as SiMoonCrescentFill };
export type { MoonCrescentFillProps };

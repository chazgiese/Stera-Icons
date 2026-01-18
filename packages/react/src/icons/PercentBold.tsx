import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PercentBoldProps = Omit<IconBaseProps, 'children'>;

const PercentBold = memo(
  forwardRef<SVGSVGElement, PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M19.3 3.3a1 1 0 1 1 1.4 1.4l-16 16a1 1 0 1 1-1.4-1.4z" />
        <path fill="currentColor" fillRule="evenodd" d="M17.5 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M6.5 3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

PercentBold.displayName = 'PercentBold';

// Triple export pattern (lucide-react style)
export { PercentBold, PercentBold as PercentBoldIcon, PercentBold as SiPercentBold };
export type { PercentBoldProps };

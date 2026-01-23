import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots0PercentBoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots0PercentBold = memo(
  forwardRef<SVGSVGElement, GaugeDots0PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-0-percent-bold" {...props}>
      <path fill="currentColor" d="M16.6 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M10.59 10.59a2 2 0 1 1 2.82 2.82l-.05.06c-.39.33-1.84 1.42-3.15 2.39l-1.78 1.32-.57.42-.16.11-.04.04h-.01a1 1 0 0 1-1.4-1.4l.04-.05.11-.16 1.74-2.35a105 105 0 0 1 2.45-3.2M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.4 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots0PercentBold.displayName = 'GaugeDots0PercentBold';

// Triple export pattern (lucide-react style)
export { GaugeDots0PercentBold, GaugeDots0PercentBold as GaugeDots0PercentBoldIcon, GaugeDots0PercentBold as SiGaugeDots0PercentBold };
export default GaugeDots0PercentBold;
export type { GaugeDots0PercentBoldProps };

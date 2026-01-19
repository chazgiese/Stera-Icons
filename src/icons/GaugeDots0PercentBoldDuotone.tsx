import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots0PercentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots0PercentBoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots0PercentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-0-percent-bold-duotone" {...props}>
      <path d="M16.6 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.4 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M10.59 10.59a2 2 0 1 1 2.82 2.82l-.05.06c-.39.33-1.84 1.42-3.15 2.39l-1.78 1.31-.57.43-.16.11-.04.04h-.01l-.08.06a1 1 0 0 1-1.33-1.45l.02-.02.03-.04.11-.16 1.74-2.35a105 105 0 0 1 2.45-3.2" />
    </IconBase>
  ))
);

GaugeDots0PercentBoldDuotone.displayName = 'GaugeDots0PercentBoldDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots0PercentBoldDuotone, GaugeDots0PercentBoldDuotone as GaugeDots0PercentBoldDuotoneIcon, GaugeDots0PercentBoldDuotone as SiGaugeDots0PercentBoldDuotone };
export type { GaugeDots0PercentBoldDuotoneProps };

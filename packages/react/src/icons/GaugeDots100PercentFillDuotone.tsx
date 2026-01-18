import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots100PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots100PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5M7.4 15.1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6.01-4.51a2 2 0 1 0-2.77 2.88c.39.33 1.84 1.42 3.15 2.39l1.78 1.32.57.42.16.11.04.04h.01a1 1 0 0 0 1.4-1.4l-.04-.05-.11-.16-1.74-2.35a105 105 0 0 0-2.4-3.15zM5.5 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.4 5.9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9.2 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.4 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M10.59 10.59a2 2 0 0 1 2.82 0l.06.05c.33.39 1.42 1.84 2.39 3.15l1.74 2.35.11.16.04.04v.01a1 1 0 0 1-1.4 1.4l-.05-.04-.16-.11-.57-.42-1.78-1.32a105 105 0 0 1-3.2-2.45 2 2 0 0 1 0-2.82M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.4 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

GaugeDots100PercentFillDuotone.displayName = 'GaugeDots100PercentFillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots100PercentFillDuotone, GaugeDots100PercentFillDuotone as GaugeDots100PercentFillDuotoneIcon, GaugeDots100PercentFillDuotone as SiGaugeDots100PercentFillDuotone };
export type { GaugeDots100PercentFillDuotoneProps };

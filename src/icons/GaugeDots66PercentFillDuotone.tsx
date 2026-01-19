import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots66PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots66PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots66PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-66-percent-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5M7.4 15.1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9.2 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m1.06-8.76a1 1 0 0 0-1.3-.1l-.02.01-.04.04-.16.11-.57.42-1.78 1.32c-1.3.97-2.76 2.06-3.15 2.4l-.05.05a2 2 0 1 0 2.88 2.77c.33-.39 1.42-1.84 2.39-3.15l1.74-2.35.11-.16.04-.04v-.01l.06-.08a1 1 0 0 0-.15-1.23M5.5 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.4 5.9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.4 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.36 6.25a1 1 0 0 1 1.45 1.32l-.06.08-.04.05-.11.16-1.74 2.35a105 105 0 0 1-2.45 3.2 2 2 0 0 1-2.82-2.82l.05-.06c.39-.33 1.84-1.42 3.15-2.39l1.78-1.32.57-.42.16-.11.04-.04zM5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.4 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

GaugeDots66PercentFillDuotone.displayName = 'GaugeDots66PercentFillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots66PercentFillDuotone, GaugeDots66PercentFillDuotone as GaugeDots66PercentFillDuotoneIcon, GaugeDots66PercentFillDuotone as SiGaugeDots66PercentFillDuotone };
export default GaugeDots66PercentFillDuotone;
export type { GaugeDots66PercentFillDuotoneProps };

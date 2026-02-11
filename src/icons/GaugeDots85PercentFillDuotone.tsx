import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots85PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots85PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots85PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-85-percent-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.73 15.27a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m8.48 0a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94M12 10.13a1.88 1.88 0 1 0 .07 3.74c.51-.04 2.07-.3 3.43-.53l2.44-.44.16-.03h.05v-.01a.87.87 0 0 0 .16-1.68l-.15-.04-.06-.01-.16-.03-2.44-.44a60 60 0 0 0-3.5-.54m-6 .5a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74m2.73-3.84a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m8.48 0a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94M12 4.63a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74" clipRule="evenodd" opacity={.4} />
        <path d="M6.79 15.27a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M15.27 15.27a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M12.07 10.13c.51.04 2.07.3 3.43.53l2.44.44.16.03h.05v.01l.16.04a.88.88 0 0 1-.15 1.68l-.06.01-.16.03-2.44.44a60 60 0 0 1-3.5.54 1.88 1.88 0 1 1 .07-3.75M6 10.63a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74M6.79 6.79a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M15.27 6.79a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M12 4.63a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74" />
    </IconBase>
  ))
);

GaugeDots85PercentFillDuotone.displayName = 'GaugeDots85PercentFillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots85PercentFillDuotone, GaugeDots85PercentFillDuotone as GaugeDots85PercentFillDuotoneIcon, GaugeDots85PercentFillDuotone as SiGaugeDots85PercentFillDuotone };
export default GaugeDots85PercentFillDuotone;
export type { GaugeDots85PercentFillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots15PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots15PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots15PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-15-percent-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.73 15.27a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m8.48 0a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m-5.28-5.14c-.51.04-2.07.3-3.43.53l-2.44.44-.16.03h-.05v.01a.87.87 0 0 0-.16 1.68l.15.04.06.01.16.03 2.44.44a60 60 0 0 0 3.5.54 1.88 1.88 0 1 0-.07-3.75m6.07.5a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74M8.73 6.79a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m8.48 0a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94M12 4.63a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74" clipRule="evenodd" opacity={.4} />
        <path d="M6.79 15.27a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M15.27 15.27a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M12 10.13a1.88 1.88 0 1 1-.07 3.74c-.51-.04-2.07-.3-3.43-.53l-2.44-.44-.16-.03h-.05v-.01l-.16-.04a.88.88 0 0 1 .15-1.68l.06-.01.16-.03 2.44-.44a60 60 0 0 1 3.5-.54M18 10.63a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74M6.79 6.79a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M15.27 6.79a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M12 4.63a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74" />
    </IconBase>
  ))
);

GaugeDots15PercentFillDuotone.displayName = 'GaugeDots15PercentFillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots15PercentFillDuotone, GaugeDots15PercentFillDuotone as GaugeDots15PercentFillDuotoneIcon, GaugeDots15PercentFillDuotone as SiGaugeDots15PercentFillDuotone };
export default GaugeDots15PercentFillDuotone;
export type { GaugeDots15PercentFillDuotoneProps };

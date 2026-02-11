import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots33PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots33PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-33-percent-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.73 15.27a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m8.48 0a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94M8.25 7.04a.87.87 0 0 0-1.29 1.08l.08.14.03.04.1.14 1.41 2.03a61 61 0 0 0 2.1 2.86 1.88 1.88 0 1 0 2.6-2.7c-.4-.34-1.68-1.25-2.8-2.05L8.43 7.17l-.14-.1zM6 10.63a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74m12 0a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74m-.79-3.84a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94M12 4.63a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74" clipRule="evenodd" opacity={.4} />
        <path d="M6.79 15.27a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M15.27 15.27a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M7.14 7.14c.3-.3.77-.34 1.11-.1l.05.03.14.1 2.03 1.41a61 61 0 0 1 2.86 2.1 1.88 1.88 0 1 1-2.7 2.6c-.34-.4-1.25-1.68-2.05-2.8L7.17 8.43l-.1-.14-.03-.04-.08-.14a.9.9 0 0 1 .18-.98M6 10.63a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74M18 10.63a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74M15.27 6.79a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M12 4.63a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74" />
    </IconBase>
  ))
);

GaugeDots33PercentFillDuotone.displayName = 'GaugeDots33PercentFillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots33PercentFillDuotone, GaugeDots33PercentFillDuotone as GaugeDots33PercentFillDuotoneIcon, GaugeDots33PercentFillDuotone as SiGaugeDots33PercentFillDuotone };
export default GaugeDots33PercentFillDuotone;
export type { GaugeDots33PercentFillDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots50PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots50PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots50PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-50-percent-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.73 15.27a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m8.48 0a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94M12 5.13c-.37 0-.7.23-.82.56l-.04.15-.01.06-.03.16-.44 2.44a60 60 0 0 0-.54 3.5 1.88 1.88 0 1 0 3.75-.07c-.04-.51-.3-2.07-.53-3.43l-.44-2.44-.03-.16v-.05h-.01a.9.9 0 0 0-.86-.72m-6 5.5a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74m12 0a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74M8.73 6.79a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m8.48 0a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.79 15.27a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M15.27 15.27a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M12 5.13c.42 0 .78.3.86.71l.01.06.03.16.44 2.44a60 60 0 0 1 .54 3.5 1.88 1.88 0 1 1-3.75-.07c.04-.51.3-2.07.53-3.43l.44-2.44.03-.16v-.05h.01l.04-.16a.9.9 0 0 1 .82-.57M6 10.63a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74M18 10.63a1.37 1.37 0 1 1 0 2.74 1.37 1.37 0 0 1 0-2.74M6.79 6.79a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94M15.27 6.79a1.37 1.37 0 1 1 1.94 1.94 1.37 1.37 0 0 1-1.94-1.94" />
    </IconBase>
  ))
);

GaugeDots50PercentFillDuotone.displayName = 'GaugeDots50PercentFillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots50PercentFillDuotone, GaugeDots50PercentFillDuotone as GaugeDots50PercentFillDuotoneIcon, GaugeDots50PercentFillDuotone as SiGaugeDots50PercentFillDuotone };
export default GaugeDots50PercentFillDuotone;
export type { GaugeDots50PercentFillDuotoneProps };

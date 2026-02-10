import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots85PercentFillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots85PercentFill = memo(
  forwardRef<SVGSVGElement, GaugeDots85PercentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-85-percent-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.73 15.27a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m8.48 0a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94M12 10.13a1.88 1.88 0 1 0 .07 3.74c.51-.04 2.07-.3 3.43-.53l2.44-.44.16-.03h.05v-.01a.87.87 0 0 0 .16-1.68l-.15-.04-.06-.01-.16-.03-2.44-.44a60 60 0 0 0-3.5-.54m-6 .5a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74m2.73-3.84a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m8.48 0a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94M12 4.63a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots85PercentFill.displayName = 'GaugeDots85PercentFill';

// Triple export pattern (lucide-react style)
export { GaugeDots85PercentFill, GaugeDots85PercentFill as GaugeDots85PercentFillIcon, GaugeDots85PercentFill as SiGaugeDots85PercentFill };
export default GaugeDots85PercentFill;
export type { GaugeDots85PercentFillProps };

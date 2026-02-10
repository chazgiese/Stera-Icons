import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots33PercentFillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33PercentFill = memo(
  forwardRef<SVGSVGElement, GaugeDots33PercentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-33-percent-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20M8.73 15.27a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94m8.48 0a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94M8.25 7.04a.87.87 0 0 0-1.29 1.08l.08.13.03.05.1.14 1.41 2.03a61 61 0 0 0 2.1 2.86 1.88 1.88 0 1 0 2.6-2.7c-.4-.34-1.68-1.25-2.8-2.05L8.43 7.17l-.14-.1zM6 10.63a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74m12 0a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74m-.79-3.84a1.37 1.37 0 1 0-1.94 1.94 1.37 1.37 0 0 0 1.94-1.94M12 4.63a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots33PercentFill.displayName = 'GaugeDots33PercentFill';

// Triple export pattern (lucide-react style)
export { GaugeDots33PercentFill, GaugeDots33PercentFill as GaugeDots33PercentFillIcon, GaugeDots33PercentFill as SiGaugeDots33PercentFill };
export default GaugeDots33PercentFill;
export type { GaugeDots33PercentFillProps };

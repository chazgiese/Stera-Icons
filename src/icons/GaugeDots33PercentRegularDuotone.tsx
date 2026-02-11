import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots33PercentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33PercentRegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots33PercentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-33-percent-duotone" {...props}>
      <path d="M7.23 15A1.25 1.25 0 1 1 9 16.77 1.25 1.25 0 0 1 7.23 15M15 15a1.25 1.25 0 1 1 1.77 1.77A1.25 1.25 0 0 1 15 15M6.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M17.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M15 7.23A1.25 1.25 0 1 1 16.77 9 1.25 1.25 0 0 1 15 7.23M12 5.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={0.4} />
        <path d="M7.23 7.23a.75.75 0 0 1 .96-.09l.04.03.14.1 2.03 1.42a61 61 0 0 1 2.84 2.07 1.75 1.75 0 1 1-2.52 2.43A61 61 0 0 1 8.7 10.4L7.27 8.37l-.1-.14-.03-.04c-.2-.3-.17-.7.09-.96" />
    </IconBase>
  ))
);

GaugeDots33PercentRegularDuotone.displayName = 'GaugeDots33PercentRegularDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots33PercentRegularDuotone, GaugeDots33PercentRegularDuotone as GaugeDots33PercentRegularDuotoneIcon, GaugeDots33PercentRegularDuotone as SiGaugeDots33PercentRegularDuotone };
export default GaugeDots33PercentRegularDuotone;
export type { GaugeDots33PercentRegularDuotoneProps };

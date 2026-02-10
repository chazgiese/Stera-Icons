import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots33PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeDots33PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-33-percent" {...props}>
      <path fill="currentColor" d="M7.23 15A1.25 1.25 0 1 1 9 16.77 1.25 1.25 0 0 1 7.23 15M15 15a1.25 1.25 0 1 1 1.77 1.77A1.25 1.25 0 0 1 15 15M7.23 7.23c.25-.26.66-.3.95-.09l.05.03.14.1 2.03 1.42c1.13.8 2.41 1.7 2.8 2.03l.04.04a1.75 1.75 0 0 1-2.48 2.48l-.04-.04a61 61 0 0 1-2.03-2.8L7.27 8.37l-.1-.14-.03-.04c-.2-.3-.17-.7.09-.96M6.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M17.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M15 7.23A1.25 1.25 0 1 1 16.77 9 1.25 1.25 0 0 1 15 7.23M12 5.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots33PercentRegular.displayName = 'GaugeDots33PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeDots33PercentRegular, GaugeDots33PercentRegular as GaugeDots33PercentRegularIcon, GaugeDots33PercentRegular as SiGaugeDots33PercentRegular };
export default GaugeDots33PercentRegular;
export type { GaugeDots33PercentRegularProps };

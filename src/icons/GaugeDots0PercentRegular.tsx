import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots0PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeDots0PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeDots0PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-0-percent" {...props}>
      <path d="M15 15a1.25 1.25 0 1 1 1.77 1.77A1.25 1.25 0 0 1 15 15M10.76 10.76a1.75 1.75 0 1 1 2.44 2.52c-.39.33-1.67 1.24-2.8 2.03L8.86 16.4l-.5.34-.13.1-.04.03a.75.75 0 0 1-1.05-1.04l.03-.05.1-.14.34-.5 1.08-1.53a61 61 0 0 1 2.07-2.84M6.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M17.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.23 7.23A1.25 1.25 0 1 1 8.99 9a1.25 1.25 0 0 1-1.76-1.77M15 7.23A1.25 1.25 0 1 1 16.77 9 1.25 1.25 0 0 1 15 7.23M12 5.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots0PercentRegular.displayName = 'GaugeDots0PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeDots0PercentRegular, GaugeDots0PercentRegular as GaugeDots0PercentRegularIcon, GaugeDots0PercentRegular as SiGaugeDots0PercentRegular };
export default GaugeDots0PercentRegular;
export type { GaugeDots0PercentRegularProps };

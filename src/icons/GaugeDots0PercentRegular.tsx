import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots0PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeDots0PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeDots0PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-0-percent" {...props}>
      <path fill="currentColor" d="M10.59 10.59a2 2 0 1 1 2.82 2.82l-.05.06c-.39.33-1.84 1.42-3.15 2.39l-1.78 1.32-.57.42-.16.11-.04.04h-.01a1 1 0 0 1-1.4-1.4l.04-.05.11-.16 1.74-2.35a105 105 0 0 1 2.45-3.2M16.6 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M5.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.4 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.6 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 4.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots0PercentRegular.displayName = 'GaugeDots0PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeDots0PercentRegular, GaugeDots0PercentRegular as GaugeDots0PercentRegularIcon, GaugeDots0PercentRegular as SiGaugeDots0PercentRegular };
export default GaugeDots0PercentRegular;
export type { GaugeDots0PercentRegularProps };

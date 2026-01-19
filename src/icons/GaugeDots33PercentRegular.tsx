import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots33PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeDots33PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-dots-33-percent" {...props}>
      <path fill="currentColor" d="M7.4 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.6 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M6.52 6.52c.26-.26.68-.3.97-.07l.06.04.16.11.57.43 1.78 1.31c1.31.98 2.76 2.06 3.14 2.38l.04.04a1.75 1.75 0 1 1-2.48 2.48l-.04-.04c-.32-.38-1.4-1.83-2.38-3.14L7.03 8.28l-.43-.57-.11-.16-.04-.05-.08-.12a.75.75 0 0 1 .15-.86M5.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.6 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 4.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots33PercentRegular.displayName = 'GaugeDots33PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeDots33PercentRegular, GaugeDots33PercentRegular as GaugeDots33PercentRegularIcon, GaugeDots33PercentRegular as SiGaugeDots33PercentRegular };
export type { GaugeDots33PercentRegularProps };

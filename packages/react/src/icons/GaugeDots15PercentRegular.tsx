import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots15PercentRegularProps = Omit<IconBaseProps, 'children'>;

const GaugeDots15PercentRegular = memo(
  forwardRef<SVGSVGElement, GaugeDots15PercentRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.4 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.6 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 10.25a1.75 1.75 0 1 1 0 3.5h-.06c-.5-.04-2.28-.3-3.9-.53l-2.89-.44-.2-.03H4.9l-.14-.04a.75.75 0 0 1 .14-1.45l.07-.01.19-.03 2.9-.44a105 105 0 0 1 3.95-.53M18.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.4 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.6 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 4.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots15PercentRegular.displayName = 'GaugeDots15PercentRegular';

// Triple export pattern (lucide-react style)
export { GaugeDots15PercentRegular, GaugeDots15PercentRegular as GaugeDots15PercentRegularIcon, GaugeDots15PercentRegular as SiGaugeDots15PercentRegular };
export type { GaugeDots15PercentRegularProps };

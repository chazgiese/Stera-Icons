import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock8RegularProps = Omit<IconBaseProps, 'children'>;

const Clock8Regular = memo(
  forwardRef<SVGSVGElement, Clock8RegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 5.25c.41 0 .75.34.75.75v6a1 1 0 0 1-.07.32l-.02.04-.05.08-.04.04-.17.15-.03.02-3.46 2a.75.75 0 1 1-.75-1.3l3.09-1.78V6c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock8Regular.displayName = 'Clock8Regular';

// Triple export pattern (lucide-react style)
export { Clock8Regular, Clock8Regular as Clock8RegularIcon, Clock8Regular as SiClock8Regular };
export type { Clock8RegularProps };

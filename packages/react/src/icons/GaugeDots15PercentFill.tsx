import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots15PercentFillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots15PercentFill = memo(
  forwardRef<SVGSVGElement, GaugeDots15PercentFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5M7.4 15.1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9.2 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11.92 10c-.5.04-2.3.3-3.91.54l-2.9.43-.2.03h-.04l-.02.01a1 1 0 0 0 0 1.98h.07q.05.03.2.04l2.89.43c1.6.24 3.4.5 3.91.54H12a2 2 0 1 0-.08-4m6.58.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.4 5.9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9.2 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots15PercentFill.displayName = 'GaugeDots15PercentFill';

export { GaugeDots15PercentFill };
export type { GaugeDots15PercentFillProps };

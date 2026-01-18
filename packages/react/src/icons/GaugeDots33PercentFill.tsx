import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots33PercentFillProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33PercentFill = memo(
  forwardRef<SVGSVGElement, GaugeDots33PercentFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5M7.4 15.1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9.2 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.64 6.24A1 1 0 0 0 6.2 7.57l.06.08.04.05.11.16 1.74 2.35c.97 1.3 2.06 2.76 2.4 3.15l.05.05a2 2 0 1 0 2.77-2.88c-.39-.33-1.84-1.42-3.15-2.39L7.86 6.4 7.7 6.3l-.04-.04zM5.5 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-1.9-4.6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots33PercentFill.displayName = 'GaugeDots33PercentFill';

export { GaugeDots33PercentFill };
export type { GaugeDots33PercentFillProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots33PercentBoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots33PercentBold = memo(
  forwardRef<SVGSVGElement, GaugeDots33PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.4 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M6.34 6.34a1 1 0 0 1 1.3-.1l.02.01.04.04.16.11 2.35 1.74a105 105 0 0 1 3.2 2.45 2 2 0 0 1-2.82 2.82l-.06-.05c-.33-.39-1.42-1.84-2.39-3.15L6.4 7.86 6.3 7.7l-.04-.04v-.01l-.06-.08a1 1 0 0 1 .15-1.23M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots33PercentBold.displayName = 'GaugeDots33PercentBold';

export { GaugeDots33PercentBold };
export type { GaugeDots33PercentBoldProps };

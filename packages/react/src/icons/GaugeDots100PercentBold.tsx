import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots100PercentBoldProps = Omit<IconBaseProps, 'children'>;

const GaugeDots100PercentBold = memo(
  forwardRef<SVGSVGElement, GaugeDots100PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M7.4 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M10.59 10.59a2 2 0 0 1 2.82 0l.06.05c.33.39 1.42 1.84 2.39 3.15l1.74 2.35.11.16.04.04v.01a1 1 0 0 1-1.4 1.4l-.05-.04-.16-.11-.57-.42-1.78-1.32a105 105 0 0 1-3.2-2.45 2 2 0 0 1 0-2.82M5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.4 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeDots100PercentBold.displayName = 'GaugeDots100PercentBold';

export { GaugeDots100PercentBold };
export type { GaugeDots100PercentBoldProps };

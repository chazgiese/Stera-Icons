import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines0PercentBoldProps = Omit<IconBaseProps, 'children'>;

const GaugeLines0PercentBold = memo(
  forwardRef<SVGSVGElement, GaugeLines0PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-1.08.22l-.04-.01a1 1 0 0 1-.3-.2l-.01-.03-2.1-2.1a1 1 0 0 1 1.41-1.41l1.37 1.37a9 9 0 0 0 1.91-4.62H19a1 1 0 0 1 0-2h1.94a9 9 0 0 0-1.91-4.61l-1.38 1.37a1 1 0 0 1-1.41-1.41l1.37-1.38a9 9 0 0 0-4.6-1.9v1.94a1 1 0 1 1-2 0V4.52c-1.74.19-3.33.88-4.63 1.91l1.38 1.38a1 1 0 0 1-1.41 1.41L4.97 7.85a9 9 0 0 0-1.91 4.61H5a1 1 0 1 1 0 2H3.06a9 9 0 0 0 2.58 5.37 1 1 0 0 1-1.42 1.41A11 11 0 0 1 12 2.46" />
        <path fill="currentColor" d="M10.59 12.05a2 2 0 0 1 2.82 2.83l-.05.05c-.39.33-1.84 1.42-3.15 2.39l-1.78 1.32-.57.42-.16.12-.04.03h-.01a1 1 0 0 1-1.4-1.39v-.01l.04-.05.11-.15.42-.58 1.32-1.78a105 105 0 0 1 2.45-3.2" />
    </IconBase>
  ))
);

GaugeLines0PercentBold.displayName = 'GaugeLines0PercentBold';

export { GaugeLines0PercentBold };
export type { GaugeLines0PercentBoldProps };

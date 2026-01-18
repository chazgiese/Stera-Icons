import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines66PercentFillProps = Omit<IconBaseProps, 'children'>;

const GaugeLines66PercentFill = memo(
  forwardRef<SVGSVGElement, GaugeLines66PercentFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-.7.3H4.92a1 1 0 0 1-.7-.3A11 11 0 0 1 12 2.46M7.75 17.71a1 1 0 0 0-1.41 0l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41m9.91 0a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zm0-9.9a1 1 0 0 0-1.3-.1h-.02q0 .03-.04.04l-.16.12-.57.42-1.78 1.32c-1.3.97-2.76 2.06-3.15 2.39l-.05.05a2 2 0 1 0 2.88 2.77c.33-.38 1.42-1.84 2.39-3.14l1.32-1.79.42-.57.11-.16.04-.04v-.01a1 1 0 0 0-.1-1.3M3.5 12.46a1 1 0 0 0 0 2H5a1 1 0 0 0 0-2zm15.5 0a1 1 0 0 0 0 2h1.5a1 1 0 0 0 0-2zM6.7 6.75a1 1 0 1 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zM12 3.96a1 1 0 0 0-1 1v1.51a1 1 0 0 0 2 0v-1.5a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeLines66PercentFill.displayName = 'GaugeLines66PercentFill';

export { GaugeLines66PercentFill };
export type { GaugeLines66PercentFillProps };

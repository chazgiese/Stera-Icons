import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines50PercentFillProps = Omit<IconBaseProps, 'children'>;

const GaugeLines50PercentFill = memo(
  forwardRef<SVGSVGElement, GaugeLines50PercentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-50-percent-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-.7.3H4.92a1 1 0 0 1-.7-.3A11 11 0 0 1 12 2.46M7.75 17.71a1 1 0 0 0-1.41 0l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41m9.91 0a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zM12 5.46a1 1 0 0 0-.99.85v.07l-.04.2-.43 2.9c-.24 1.6-.5 3.4-.54 3.9v.08a2 2 0 1 0 4-.07c-.04-.5-.3-2.3-.54-3.92l-.43-2.9-.03-.19v-.05l-.01-.01a1 1 0 0 0-.99-.86m-8.5 7a1 1 0 0 0 0 2H5a1 1 0 1 0 0-2zm15.5 0a1 1 0 0 0 0 2h1.5a1 1 0 1 0 0-2zM6.7 6.75a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 1 0 1.41-1.41zm12.01 0a1 1 0 0 0-1.41 0L16.24 7.8a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeLines50PercentFill.displayName = 'GaugeLines50PercentFill';

// Triple export pattern (lucide-react style)
export { GaugeLines50PercentFill, GaugeLines50PercentFill as GaugeLines50PercentFillIcon, GaugeLines50PercentFill as SiGaugeLines50PercentFill };
export default GaugeLines50PercentFill;
export type { GaugeLines50PercentFillProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots0PercentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots0PercentRegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots0PercentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.6 15.35a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M5.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M18.5 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.4 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16.6 6.15a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 4.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" opacity={0.4} />
        <path fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" d="M10.59 10.59a2 2 0 1 1 2.82 2.82l-.05.06c-.39.33-1.84 1.42-3.15 2.39l-1.78 1.31-.57.43-.16.11-.04.04h-.01l-.08.06a1 1 0 0 1-1.33-1.45l.02-.02.03-.04.11-.16 1.74-2.35a105 105 0 0 1 2.45-3.2" />
    </IconBase>
  ))
);

GaugeDots0PercentRegularDuotone.displayName = 'GaugeDots0PercentRegularDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots0PercentRegularDuotone, GaugeDots0PercentRegularDuotone as GaugeDots0PercentRegularDuotoneIcon, GaugeDots0PercentRegularDuotone as SiGaugeDots0PercentRegularDuotone };
export type { GaugeDots0PercentRegularDuotoneProps };

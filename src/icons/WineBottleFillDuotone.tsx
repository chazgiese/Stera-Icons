import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WineBottleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WineBottleFillDuotone = memo(
  forwardRef<SVGSVGElement, WineBottleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wine-bottle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.75 2a1 1 0 0 0-.9-1h-1.6a1 1 0 0 0-1 1v5.64q.48-.14 1-.14h1.5q.52 0 1 .14z" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M10.25 7.65A3.5 3.5 0 0 0 7.75 11v10c0 1.1.9 2 2 2h4.5a2 2 0 0 0 2-2V11a3.5 3.5 0 0 0-3.5-3.5h-1.5q-.52 0-1 .15" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

WineBottleFillDuotone.displayName = 'WineBottleFillDuotone';

// Triple export pattern (lucide-react style)
export { WineBottleFillDuotone, WineBottleFillDuotone as WineBottleFillDuotoneIcon, WineBottleFillDuotone as SiWineBottleFillDuotone };
export default WineBottleFillDuotone;
export type { WineBottleFillDuotoneProps };

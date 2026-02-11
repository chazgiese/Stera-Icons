import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonCrescentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentRegularDuotone = memo(
  forwardRef<SVGSVGElement, MoonCrescentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-crescent-duotone" {...props}>
      <path d="m10.54 3.41-.05.17A8.25 8.25 0 0 0 20.05 15a.8.8 0 0 0-.54.43q-.32.69-.75 1.3A9.72 9.72 0 0 1 8.58 4.49q.67-.3 1.41-.5c.3-.07.5-.3.55-.58M20.9 15.47l.02.08v.04zM10.12 2.59l-.05-.02z" opacity={0.4} />
        <path d="M9.63 2.54A.75.75 0 0 1 9.99 4a8.25 8.25 0 1 0 9.52 11.42.75.75 0 0 1 1.36.62A9.75 9.75 0 1 1 9.63 2.54" />
    </IconBase>
  ))
);

MoonCrescentRegularDuotone.displayName = 'MoonCrescentRegularDuotone';

// Triple export pattern (lucide-react style)
export { MoonCrescentRegularDuotone, MoonCrescentRegularDuotone as MoonCrescentRegularDuotoneIcon, MoonCrescentRegularDuotone as SiMoonCrescentRegularDuotone };
export default MoonCrescentRegularDuotone;
export type { MoonCrescentRegularDuotoneProps };

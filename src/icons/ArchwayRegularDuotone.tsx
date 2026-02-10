import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchwayRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArchwayRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArchwayRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="archway-duotone" {...props}>
      <path fill="currentColor" d="m17.36 20.67.34.67c-.44.23-.92.32-1.47.37q-.8.05-2.03.04H9.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37L6.98 20c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2z" opacity={.4} />
        <path fill="currentColor" d="M12 2.25A7.75 7.75 0 0 1 19.75 10v6.2q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64l-.34-.67-.34-.67q.65-.33.98-.98c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V10a6.25 6.25 0 1 0-12.5 0v6.2c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98l-.34.67-.34.67a3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03V10A7.75 7.75 0 0 1 12 2.25" />
    </IconBase>
  ))
);

ArchwayRegularDuotone.displayName = 'ArchwayRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArchwayRegularDuotone, ArchwayRegularDuotone as ArchwayRegularDuotoneIcon, ArchwayRegularDuotone as SiArchwayRegularDuotone };
export default ArchwayRegularDuotone;
export type { ArchwayRegularDuotoneProps };

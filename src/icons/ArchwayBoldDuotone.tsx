import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchwayBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArchwayBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArchwayBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="archway-bold-duotone" {...props}>
      <path d="M17.82 21.56c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4l.91-1.78c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18z" opacity={.4} />
        <path d="M12 2a8 8 0 0 1 8 8v6.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74l-.91-1.78a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V10a6 6 0 0 0-12 0v6.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87l-.9 1.78a4 4 0 0 1-1.75-1.74 4 4 0 0 1-.4-1.57Q4 17.43 4 16.2V10a8 8 0 0 1 8-8" />
    </IconBase>
  ))
);

ArchwayBoldDuotone.displayName = 'ArchwayBoldDuotone';

// Triple export pattern (lucide-react style)
export { ArchwayBoldDuotone, ArchwayBoldDuotone as ArchwayBoldDuotoneIcon, ArchwayBoldDuotone as SiArchwayBoldDuotone };
export default ArchwayBoldDuotone;
export type { ArchwayBoldDuotoneProps };

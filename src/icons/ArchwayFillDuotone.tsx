import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchwayFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArchwayFillDuotone = memo(
  forwardRef<SVGSVGElement, ArchwayFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="archway-fill-duotone" {...props}>
      <path d="M12 4a6 6 0 0 1 6 6v6.2c0 .86 0 1.44-.04 1.89-.03.44-.1.66-.18.82a2 2 0 0 1-.87.87c-.16.08-.38.15-.82.18-.45.04-1.03.04-1.89.04H9.8c-.86 0-1.44 0-1.89-.04-.44-.03-.66-.1-.82-.18a2 2 0 0 1-.87-.87 2 2 0 0 1-.18-.82C6 17.64 6 17.06 6 16.2V10a6 6 0 0 1 6-6" opacity={.4} />
        <path fillRule="evenodd" d="M12 2a8 8 0 0 1 8 8v6.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 17.43 4 16.2V10a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6v6.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V10a6 6 0 0 0-6-6" clipRule="evenodd" />
    </IconBase>
  ))
);

ArchwayFillDuotone.displayName = 'ArchwayFillDuotone';

// Triple export pattern (lucide-react style)
export { ArchwayFillDuotone, ArchwayFillDuotone as ArchwayFillDuotoneIcon, ArchwayFillDuotone as SiArchwayFillDuotone };
export default ArchwayFillDuotone;
export type { ArchwayFillDuotoneProps };

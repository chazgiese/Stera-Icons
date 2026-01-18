import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LightbulbFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LightbulbFillDuotone = memo(
  forwardRef<SVGSVGElement, LightbulbFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 1.25a6.75 6.75 0 0 1 6.02 9.81l-.68 1.25-.11.2q-.4.72-.74 1.41-.27.55-.45 1.08H7.96a10 10 0 0 0-.45-1.08 26 26 0 0 0-.85-1.6l-.68-1.26A6.75 6.75 0 0 1 12 1.25" opacity={.4} />
        <path fill="currentColor" d="M16.04 15a5 5 0 0 0-.29 1.66V19c0 1.3-.91 2.4-2.14 2.68a1.75 1.75 0 0 1-3.22 0A2.75 2.75 0 0 1 8.25 19v-2.34q0-.83-.3-1.66z" />
    </IconBase>
  ))
);

LightbulbFillDuotone.displayName = 'LightbulbFillDuotone';

// Triple export pattern (lucide-react style)
export { LightbulbFillDuotone, LightbulbFillDuotone as LightbulbFillDuotoneIcon, LightbulbFillDuotone as SiLightbulbFillDuotone };
export type { LightbulbFillDuotoneProps };

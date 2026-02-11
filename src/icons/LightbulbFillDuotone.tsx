import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LightbulbFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LightbulbFillDuotone = memo(
  forwardRef<SVGSVGElement, LightbulbFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="lightbulb-fill-duotone" {...props}>
      <path d="M12 2.13a6.38 6.38 0 0 1 5.16 10.12c-.85 1.16-1.51 2.18-1.53 3.27a.9.9 0 0 0-.88-.9h-5.5a.9.9 0 0 0-.87.9v.09-.1c-.03-1.08-.69-2.1-1.54-3.26A6.37 6.37 0 0 1 12 2.13" opacity={.4} />
        <path d="M14.75 14.63a.9.9 0 0 1 .88.89V18c0 1.3-.87 2.4-2.05 2.75a1.75 1.75 0 0 1-3.16 0A2.9 2.9 0 0 1 8.38 18v-2.48a.9.9 0 0 1 .87-.9z" />
    </IconBase>
  ))
);

LightbulbFillDuotone.displayName = 'LightbulbFillDuotone';

// Triple export pattern (lucide-react style)
export { LightbulbFillDuotone, LightbulbFillDuotone as LightbulbFillDuotoneIcon, LightbulbFillDuotone as SiLightbulbFillDuotone };
export default LightbulbFillDuotone;
export type { LightbulbFillDuotoneProps };

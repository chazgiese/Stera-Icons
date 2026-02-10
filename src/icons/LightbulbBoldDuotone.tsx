import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LightbulbBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LightbulbBoldDuotone = memo(
  forwardRef<SVGSVGElement, LightbulbBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="lightbulb-bold-duotone" {...props}>
      <path fill="currentColor" d="M12 2a6.5 6.5 0 0 1 5.26 10.32c-.87 1.2-1.51 2.2-1.51 3.25v-.07a1 1 0 0 0-1-1h-.87a10 10 0 0 1 1.76-3.36 4.5 4.5 0 1 0-7.29 0 10 10 0 0 1 1.77 3.36h-.87a1 1 0 0 0-1 1v.07c0-1.05-.64-2.06-1.51-3.25A6.5 6.5 0 0 1 12 2" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14.75 14.5a1 1 0 0 1 1 1V18a3 3 0 0 1-1.92 2.8 2 2 0 0 1-3.67 0A3 3 0 0 1 8.25 18v-2.5a1 1 0 0 1 1-1zm-4.5 3.5a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1.5h-3.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

LightbulbBoldDuotone.displayName = 'LightbulbBoldDuotone';

// Triple export pattern (lucide-react style)
export { LightbulbBoldDuotone, LightbulbBoldDuotone as LightbulbBoldDuotoneIcon, LightbulbBoldDuotone as SiLightbulbBoldDuotone };
export default LightbulbBoldDuotone;
export type { LightbulbBoldDuotoneProps };

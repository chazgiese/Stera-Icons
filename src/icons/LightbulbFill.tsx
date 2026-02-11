import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LightbulbFillProps = Omit<IconBaseProps, 'children'>;

const LightbulbFill = memo(
  forwardRef<SVGSVGElement, LightbulbFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="lightbulb-fill" {...props}>
      <path d="M15.5 18c0 1.2-.78 2.23-1.86 2.6a1.75 1.75 0 0 1-3.28 0A2.75 2.75 0 0 1 8.5 18v-1.62h7zM12 2.25a6.25 6.25 0 0 1 5.06 9.92 9 9 0 0 0-1.4 2.46H8.34c-.25-.81-.79-1.6-1.4-2.46A6.25 6.25 0 0 1 12 2.25" />
    </IconBase>
  ))
);

LightbulbFill.displayName = 'LightbulbFill';

// Triple export pattern (lucide-react style)
export { LightbulbFill, LightbulbFill as LightbulbFillIcon, LightbulbFill as SiLightbulbFill };
export default LightbulbFill;
export type { LightbulbFillProps };

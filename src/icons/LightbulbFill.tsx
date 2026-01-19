import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LightbulbFillProps = Omit<IconBaseProps, 'children'>;

const LightbulbFill = memo(
  forwardRef<SVGSVGElement, LightbulbFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="lightbulb-fill" {...props}>
      <path fill="currentColor" d="M15.75 19c0 1.2-.77 2.22-1.84 2.6a2 2 0 0 1-3.82 0A2.75 2.75 0 0 1 8.25 19v-2.25h7.5zM12 1.25a6.75 6.75 0 0 1 6.02 9.81q-.39.74-.8 1.46-.4.7-.73 1.4-.33.68-.52 1.33H8.03q-.2-.66-.52-1.33-.33-.7-.74-1.4-.4-.72-.79-1.46A6.75 6.75 0 0 1 12 1.25" />
    </IconBase>
  ))
);

LightbulbFill.displayName = 'LightbulbFill';

// Triple export pattern (lucide-react style)
export { LightbulbFill, LightbulbFill as LightbulbFillIcon, LightbulbFill as SiLightbulbFill };
export default LightbulbFill;
export type { LightbulbFillProps };

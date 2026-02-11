import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LightbulbBoldProps = Omit<IconBaseProps, 'children'>;

const LightbulbBold = memo(
  forwardRef<SVGSVGElement, LightbulbBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="lightbulb-bold" {...props}>
      <path fillRule="evenodd" d="M12 2a6.5 6.5 0 0 1 5.26 10.32c-.87 1.2-1.51 2.2-1.51 3.25V18a3 3 0 0 1-1.92 2.8 2 2 0 0 1-3.67 0A3 3 0 0 1 8.25 18v-2.43c0-1.05-.64-2.06-1.51-3.25A6.5 6.5 0 0 1 12 2m-1.75 16a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-1.5h-3.5zM12 4a4.5 4.5 0 0 0-3.64 7.14 10 10 0 0 1 1.76 3.36h3.76a10 10 0 0 1 1.76-3.36A4.5 4.5 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

LightbulbBold.displayName = 'LightbulbBold';

// Triple export pattern (lucide-react style)
export { LightbulbBold, LightbulbBold as LightbulbBoldIcon, LightbulbBold as SiLightbulbBold };
export default LightbulbBold;
export type { LightbulbBoldProps };

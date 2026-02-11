import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LightbulbRegularProps = Omit<IconBaseProps, 'children'>;

const LightbulbRegular = memo(
  forwardRef<SVGSVGElement, LightbulbRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="lightbulb" {...props}>
      <path fillRule="evenodd" d="M12 2.25a6.25 6.25 0 0 1 5.06 9.92c-.86 1.19-1.56 2.25-1.56 3.4V18c0 1.2-.78 2.23-1.86 2.6a1.75 1.75 0 0 1-3.28 0A2.75 2.75 0 0 1 8.5 18v-2.43c0-1.15-.7-2.21-1.56-3.4A6.25 6.25 0 0 1 12 2.25M10 18c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25v-1.75h-4zm2-14.25a4.75 4.75 0 0 0-3.84 7.54c.68.94 1.5 2.1 1.76 3.46h4.16a9 9 0 0 1 1.76-3.46A4.75 4.75 0 0 0 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

LightbulbRegular.displayName = 'LightbulbRegular';

// Triple export pattern (lucide-react style)
export { LightbulbRegular, LightbulbRegular as LightbulbRegularIcon, LightbulbRegular as SiLightbulbRegular };
export default LightbulbRegular;
export type { LightbulbRegularProps };

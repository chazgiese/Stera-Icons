import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LightbulbRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LightbulbRegularDuotone = memo(
  forwardRef<SVGSVGElement, LightbulbRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="lightbulb-duotone" {...props}>
      <path fill="currentColor" d="M12 2.25a6.25 6.25 0 0 1 5.06 9.92c-.86 1.19-1.56 2.25-1.56 3.4v-.07a.75.75 0 0 0-.75-.75h-.67a9 9 0 0 1 1.76-3.46 4.75 4.75 0 1 0-7.69 0c.69.94 1.51 2.1 1.77 3.46h-.67a.75.75 0 0 0-.75.75v.07c0-1.15-.7-2.21-1.56-3.4A6.25 6.25 0 0 1 12 2.25" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14.75 14.75c.41 0 .75.34.75.75V18c0 1.2-.78 2.23-1.86 2.6a1.75 1.75 0 0 1-3.28 0A2.75 2.75 0 0 1 8.5 18v-2.5a.75.75 0 0 1 .75-.75zM10 18c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25v-1.75h-4z" clipRule="evenodd" />
    </IconBase>
  ))
);

LightbulbRegularDuotone.displayName = 'LightbulbRegularDuotone';

// Triple export pattern (lucide-react style)
export { LightbulbRegularDuotone, LightbulbRegularDuotone as LightbulbRegularDuotoneIcon, LightbulbRegularDuotone as SiLightbulbRegularDuotone };
export default LightbulbRegularDuotone;
export type { LightbulbRegularDuotoneProps };

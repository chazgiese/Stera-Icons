import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LightbulbRegularProps = Omit<IconBaseProps, 'children'>;

const LightbulbRegular = memo(
  forwardRef<SVGSVGElement, LightbulbRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="lightbulb" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a6.75 6.75 0 0 1 6.02 9.81q-.39.74-.8 1.46-.4.7-.73 1.4a6.4 6.4 0 0 0-.74 2.74V19c0 1.3-.91 2.4-2.14 2.68a1.75 1.75 0 0 1-3.22 0A2.75 2.75 0 0 1 8.25 19v-2.34c0-.91-.3-1.8-.74-2.74q-.33-.7-.74-1.4-.4-.72-.79-1.46A6.75 6.75 0 0 1 12 1.25M9.75 19c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25v-2.25h-4.5zM12 2.75a5.25 5.25 0 0 0-4.68 7.63q.36.69.76 1.4.41.73.79 1.5.46.93.71 1.97h4.84q.26-1.04.71-1.97a27 27 0 0 1 .79-1.5q.41-.71.76-1.4.55-1.08.57-2.38c0-2.9-2.35-5.25-5.25-5.25" clipRule="evenodd" />
    </IconBase>
  ))
);

LightbulbRegular.displayName = 'LightbulbRegular';

// Triple export pattern (lucide-react style)
export { LightbulbRegular, LightbulbRegular as LightbulbRegularIcon, LightbulbRegular as SiLightbulbRegular };
export type { LightbulbRegularProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LightbulbRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LightbulbRegularDuotone = memo(
  forwardRef<SVGSVGElement, LightbulbRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="lightbulb-duotone" {...props}>
      <path fill="currentColor" d="M12 1.25a6.75 6.75 0 0 1 6.02 9.81q-.33.64-.68 1.26c-.56 1-1.08 1.93-1.36 2.9a.75.75 0 0 0-.72-.97h-.54c.35-.95.85-1.84 1.3-2.66q.36-.62.66-1.21.55-1.08.57-2.38a5.25 5.25 0 1 0-9.93 2.38q.3.6.65 1.2c.46.83.96 1.72 1.3 2.67h-.53a.75.75 0 0 0-.72.96c-.28-.96-.8-1.89-1.36-2.9q-.35-.6-.68-1.25A6.75 6.75 0 0 1 12 1.25" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.26 14.25a.75.75 0 0 1 .72.96q-.23.73-.23 1.45V19c0 1.3-.91 2.4-2.14 2.68a1.75 1.75 0 0 1-3.22 0A2.75 2.75 0 0 1 8.25 19v-2.34q0-.72-.23-1.45a.75.75 0 0 1 .72-.96zm-5.58 1.5q.07.45.07.9V19c0 .69.56 1.25 1.25 1.25h2c.69 0 1.25-.56 1.25-1.25v-2.34q0-.46.07-.91z" clipRule="evenodd" />
    </IconBase>
  ))
);

LightbulbRegularDuotone.displayName = 'LightbulbRegularDuotone';

// Triple export pattern (lucide-react style)
export { LightbulbRegularDuotone, LightbulbRegularDuotone as LightbulbRegularDuotoneIcon, LightbulbRegularDuotone as SiLightbulbRegularDuotone };
export default LightbulbRegularDuotone;
export type { LightbulbRegularDuotoneProps };

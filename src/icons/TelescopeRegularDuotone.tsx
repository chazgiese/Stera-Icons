import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TelescopeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TelescopeRegularDuotone = memo(
  forwardRef<SVGSVGElement, TelescopeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="telescope-duotone" {...props}>
      <path d="M10.15 15.03q.56.52 1.34.67l-2.82 5.64a.75.75 0 0 1-1.34-.68zM16.67 20.67a.75.75 0 0 1-1.34.66L12.5 15.7q.78-.16 1.34-.67zM14.64 4.58c-.25.55-.32 1.2-.15 1.83l-.05-.17-7.1 2.5.84 3.11 1.47-.27q-.39.63-.4 1.42v.17l-2.16.41-1.55-5.8zM15.53 10.3c.18.63.56 1.15 1.05 1.5l-1.96.37a2.8 2.8 0 0 0-.95-1.35l1.9-.35z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 10.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
        <path fill="currentColor" d="m5.54 7.78.39 1.45L4 9.91a.5.5 0 0 0-.32.6l.44 1.63c.07.25.32.41.58.36l2-.37.4 1.45-2.13.4a2 2 0 0 1-2.3-1.45l-.44-1.63A2 2 0 0 1 3.5 8.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M18.13 2.6A2 2 0 0 1 20.58 4L22 9.33a2 2 0 0 1-1.41 2.44l-1.7.46a2.75 2.75 0 0 1-3.36-1.95l-1.04-3.86a2.75 2.75 0 0 1 1.95-3.37zm.38 1.45-1.69.45c-.66.18-1.06.86-.88 1.53l1.04 3.86c.17.67.86 1.07 1.53.89l1.69-.45a.5.5 0 0 0 .35-.62l-1.42-5.3a.5.5 0 0 0-.62-.36" clipRule="evenodd" />
    </IconBase>
  ))
);

TelescopeRegularDuotone.displayName = 'TelescopeRegularDuotone';

// Triple export pattern (lucide-react style)
export { TelescopeRegularDuotone, TelescopeRegularDuotone as TelescopeRegularDuotoneIcon, TelescopeRegularDuotone as SiTelescopeRegularDuotone };
export default TelescopeRegularDuotone;
export type { TelescopeRegularDuotoneProps };

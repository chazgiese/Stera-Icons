import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SidebarRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SidebarRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, SidebarRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14.25 3.25v1.5H8.4c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v3.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h5.85v1.5H8.4q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.08-1.04-.06-2.69v-3.2q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.6 3.25q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v3.2q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06h-1.35V3.25zm.15 16c1.05 0 1.81 0 2.42-.05.62-.05 1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57v-3.2c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.6-.05-1.37-.05-2.42-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

SidebarRightRegularDuotone.displayName = 'SidebarRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { SidebarRightRegularDuotone, SidebarRightRegularDuotone as SidebarRightRegularDuotoneIcon, SidebarRightRegularDuotone as SiSidebarRightRegularDuotone };
export type { SidebarRightRegularDuotoneProps };

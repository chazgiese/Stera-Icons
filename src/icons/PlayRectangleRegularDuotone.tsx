import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlayRectangleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlayRectangleRegularDuotone = memo(
  forwardRef<SVGSVGElement, PlayRectangleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="play-rectangle-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.1 3.75q1.64-.02 2.69.06 1.05.06 1.87.46c.89.45 1.62 1.18 2.07 2.07.28.55.4 1.16.46 1.87q.07 1.04.06 2.69v2.2q.02 1.64-.06 2.69a5 5 0 0 1-.46 1.87 4.8 4.8 0 0 1-2.07 2.07c-.55.28-1.16.4-1.87.46q-1.04.07-2.69.06H8.9q-1.64.02-2.69-.06a5 5 0 0 1-1.87-.46 4.8 4.8 0 0 1-2.07-2.07 5 5 0 0 1-.46-1.87q-.08-1.04-.06-2.69v-2.2q-.02-1.64.06-2.69.06-1.05.46-1.87a4.8 4.8 0 0 1 2.07-2.07c.55-.28 1.16-.4 1.87-.46q1.04-.07 2.69-.06zm-6.2 1.5c-1.13 0-1.94 0-2.57.05s-1 .15-1.3.3q-.94.5-1.43 1.42c-.15.3-.25.7-.3 1.31-.05.63-.05 1.44-.05 2.57v2.2c0 1.13 0 1.94.05 2.57s.15 1 .3 1.3q.5.94 1.42 1.43c.3.15.7.25 1.31.3.63.05 1.44.05 2.57.05h6.2c1.13 0 1.94 0 2.57-.05s1-.15 1.3-.3q.94-.5 1.43-1.42c.15-.3.25-.7.3-1.31.05-.63.05-1.44.05-2.57v-2.2c0-1.13 0-1.94-.05-2.57s-.15-1-.3-1.3q-.5-.94-1.42-1.43c-.3-.15-.7-.25-1.31-.3-.63-.05-1.44-.05-2.57-.05z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M10.44 7.87c.34-.02.74.25 1.55.79l3.01 2c.67.45 1 .68 1.12.96a1 1 0 0 1 0 .76c-.12.28-.45.5-1.12.95L12 15.34c-.81.54-1.21.81-1.55.79a1 1 0 0 1-.74-.4c-.2-.26-.2-.75-.2-1.72V10c0-.97 0-1.46.2-1.72a1 1 0 0 1 .74-.4" />
    </IconBase>
  ))
);

PlayRectangleRegularDuotone.displayName = 'PlayRectangleRegularDuotone';

// Triple export pattern (lucide-react style)
export { PlayRectangleRegularDuotone, PlayRectangleRegularDuotone as PlayRectangleRegularDuotoneIcon, PlayRectangleRegularDuotone as SiPlayRectangleRegularDuotone };
export default PlayRectangleRegularDuotone;
export type { PlayRectangleRegularDuotoneProps };

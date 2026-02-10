import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CameraBoldDuotone = memo(
  forwardRef<SVGSVGElement, CameraBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="camera-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.74 4q.45-.01.89.1.46.15.85.45c.31.26.53.6.76.93l.7 1.02.09.12h.14c.72 0 1.24 0 1.69.1a4 4 0 0 1 3.05 3.04c.1.46.09.98.09 1.7v2.74q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2v-2.75c0-.71 0-1.23.1-1.69a4 4 0 0 1 3.04-3.04c.45-.1.97-.1 1.69-.1h.14l.09-.12.7-1.02c.23-.33.45-.67.76-.93A2.5 2.5 0 0 1 10.26 4zm-3.18 2c-.52 0-.58.01-.61.02l-.17.09c-.03.02-.07.07-.37.5l-.7 1.03-.25.33a2 2 0 0 1-1.22.64q-.24.02-.41.02c-.82 0-1.07 0-1.26.04a2 2 0 0 0-1.52 1.53c-.04.18-.05.43-.05 1.25v2.75c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-2.75c0-.82 0-1.07-.05-1.25a2 2 0 0 0-1.52-1.53 7 7 0 0 0-1.26-.04q-.18 0-.41-.02a2 2 0 0 1-1.22-.64q-.15-.19-.24-.33l-.71-1.03c-.3-.43-.34-.48-.37-.5l-.17-.09c-.03-.01-.1-.02-.61-.02z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 9a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

CameraBoldDuotone.displayName = 'CameraBoldDuotone';

// Triple export pattern (lucide-react style)
export { CameraBoldDuotone, CameraBoldDuotone as CameraBoldDuotoneIcon, CameraBoldDuotone as SiCameraBoldDuotone };
export default CameraBoldDuotone;
export type { CameraBoldDuotoneProps };

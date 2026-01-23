import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CameraBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CameraBoldDuotone = memo(
  forwardRef<SVGSVGElement, CameraBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="camera-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.29 3c.56 0 1.05-.01 1.51.13a3 3 0 0 1 1.04.55c.37.3.63.72.94 1.19l.32.48.2.3q.26.3.66.34l.35.01c.6 0 1.03 0 1.4.06a4 4 0 0 1 3.23 3.23c.06.37.06.8.06 1.4v4.51q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q1 16.43 1 15.2v-4.51c0-.6 0-1.03.06-1.4A4 4 0 0 1 4.3 6.06C4.66 6 5.09 6 5.69 6h.35a1 1 0 0 0 .65-.36l.2-.29.33-.48c.31-.47.57-.88.95-1.19a3 3 0 0 1 1.03-.55c.46-.14.95-.13 1.51-.13zM10.7 5c-.69 0-.82.01-.93.04a1 1 0 0 0-.34.19c-.1.07-.18.18-.56.75l-.32.48q-.17.26-.34.47a3 3 0 0 1-1.95 1.05Q6 8 5.69 8c-.68 0-.9 0-1.05.03a2 2 0 0 0-1.6 1.61C3 9.8 3 10.01 3 10.7v4.51c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h10.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-4.51c0-.68 0-.9-.03-1.05a2 2 0 0 0-1.61-1.6A7 7 0 0 0 18.3 8q-.31 0-.58-.02a3 3 0 0 1-1.95-1.05q-.17-.2-.34-.47l-.32-.48a4 4 0 0 0-.56-.75 1 1 0 0 0-.34-.19c-.1-.03-.24-.04-.93-.04z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 8.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

CameraBoldDuotone.displayName = 'CameraBoldDuotone';

// Triple export pattern (lucide-react style)
export { CameraBoldDuotone, CameraBoldDuotone as CameraBoldDuotoneIcon, CameraBoldDuotone as SiCameraBoldDuotone };
export default CameraBoldDuotone;
export type { CameraBoldDuotoneProps };

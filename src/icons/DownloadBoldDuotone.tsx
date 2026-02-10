import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DownloadBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DownloadBoldDuotone = memo(
  forwardRef<SVGSVGElement, DownloadBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="download-bold-duotone" {...props}>
      <path fill="currentColor" d="M20.5 14.5a1 1 0 0 1 1 1v.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.3q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57q-.05-.82-.04-2.05v-.2a1 1 0 1 1 2 0v.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h7.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-.2a1 1 0 0 1 1-1" opacity={.4} />
        <path fill="currentColor" d="M12 2.5a1 1 0 0 1 1 1v9.59l3.8-3.8a1 1 0 0 1 1.4 1.42l-5.5 5.5a1 1 0 0 1-1.33.06l-.08-.06-5.5-5.5a1 1 0 1 1 1.42-1.42L11 13.1V3.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

DownloadBoldDuotone.displayName = 'DownloadBoldDuotone';

// Triple export pattern (lucide-react style)
export { DownloadBoldDuotone, DownloadBoldDuotone as DownloadBoldDuotoneIcon, DownloadBoldDuotone as SiDownloadBoldDuotone };
export default DownloadBoldDuotone;
export type { DownloadBoldDuotoneProps };

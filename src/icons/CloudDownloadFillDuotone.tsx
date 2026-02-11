import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudDownloadFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudDownloadFillDuotone = memo(
  forwardRef<SVGSVGElement, CloudDownloadFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cloud-download-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 4a7 7 0 0 1 6.33 4A6 6 0 0 1 18 20H5a5 5 0 0 1 0-10h.07A7 7 0 0 1 12 4m0 4a1 1 0 0 0-1 1v5.59l-1.8-1.8a1 1 0 1 0-1.4 1.42l3.5 3.5a1 1 0 0 0 1.4 0l3.5-3.5a1 1 0 1 0-1.4-1.42L13 14.6V9a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path d="M12 8a1 1 0 0 1 1 1v5.59l1.8-1.8a1 1 0 0 1 1.4 1.42l-3.5 3.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.42l1.8 1.8V9a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CloudDownloadFillDuotone.displayName = 'CloudDownloadFillDuotone';

// Triple export pattern (lucide-react style)
export { CloudDownloadFillDuotone, CloudDownloadFillDuotone as CloudDownloadFillDuotoneIcon, CloudDownloadFillDuotone as SiCloudDownloadFillDuotone };
export default CloudDownloadFillDuotone;
export type { CloudDownloadFillDuotoneProps };

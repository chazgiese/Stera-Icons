import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudDownloadFillProps = Omit<IconBaseProps, 'children'>;

const CloudDownloadFill = memo(
  forwardRef<SVGSVGElement, CloudDownloadFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cloud-download-fill" {...props}>
      <path fillRule="evenodd" d="M12 4a7 7 0 0 1 6.33 4A6 6 0 0 1 18 20H5a5 5 0 0 1 0-10h.07A7 7 0 0 1 12 4m0 4a1 1 0 0 0-1 1v5.59l-1.8-1.8a1 1 0 1 0-1.4 1.42l3.5 3.5a1 1 0 0 0 1.4 0l3.5-3.5a1 1 0 1 0-1.4-1.42L13 14.6V9a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

CloudDownloadFill.displayName = 'CloudDownloadFill';

// Triple export pattern (lucide-react style)
export { CloudDownloadFill, CloudDownloadFill as CloudDownloadFillIcon, CloudDownloadFill as SiCloudDownloadFill };
export default CloudDownloadFill;
export type { CloudDownloadFillProps };

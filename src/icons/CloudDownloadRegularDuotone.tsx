import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudDownloadRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudDownloadRegularDuotone = memo(
  forwardRef<SVGSVGElement, CloudDownloadRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cloud-download-duotone" {...props}>
      <path d="M12 4.25a6.8 6.8 0 0 1 6.16 4 5.75 5.75 0 0 1-.16 11.5h-1a.75.75 0 0 1 0-1.5h1a4.25 4.25 0 1 0-.29-8.49.75.75 0 0 1-.76-.5A5.25 5.25 0 0 0 6.75 11v.11a.75.75 0 0 1-.93.74A3.26 3.26 0 0 0 1.75 15c0 1.8 1.46 3.25 3.25 3.25h2a.75.75 0 0 1 0 1.5H5a4.75 4.75 0 1 1 .3-9.5c.36-3.37 3.22-6 6.7-6" opacity={.4} />
        <path d="M12 10.25c.41 0 .75.34.75.75v6.19l2.72-2.72a.75.75 0 0 1 1.06 1.06l-4 4c-.3.3-.77.3-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V11c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

CloudDownloadRegularDuotone.displayName = 'CloudDownloadRegularDuotone';

// Triple export pattern (lucide-react style)
export { CloudDownloadRegularDuotone, CloudDownloadRegularDuotone as CloudDownloadRegularDuotoneIcon, CloudDownloadRegularDuotone as SiCloudDownloadRegularDuotone };
export default CloudDownloadRegularDuotone;
export type { CloudDownloadRegularDuotoneProps };

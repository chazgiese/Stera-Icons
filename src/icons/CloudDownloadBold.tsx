import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CloudDownloadBoldProps = Omit<IconBaseProps, 'children'>;

const CloudDownloadBold = memo(
  forwardRef<SVGSVGElement, CloudDownloadBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cloud-download-bold" {...props}>
      <path fill="currentColor" d="M12 4a7 7 0 0 1 6.33 4A6 6 0 0 1 18 20h-1a1 1 0 1 1 0-2h1a4 4 0 1 0-.27-7.99 1 1 0 0 1-1.01-.67A5 5 0 0 0 7 11v.1a1 1 0 0 1-1.25 1A3 3 0 1 0 5 18h2a1 1 0 1 1 0 2H5a5 5 0 0 1 0-10h.07A7 7 0 0 1 12 4" />
        <path fill="currentColor" d="M12 10a1 1 0 0 1 1 1v5.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42l2.3 2.3V11a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CloudDownloadBold.displayName = 'CloudDownloadBold';

// Triple export pattern (lucide-react style)
export { CloudDownloadBold, CloudDownloadBold as CloudDownloadBoldIcon, CloudDownloadBold as SiCloudDownloadBold };
export default CloudDownloadBold;
export type { CloudDownloadBoldProps };

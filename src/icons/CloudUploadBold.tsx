import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudUploadBoldProps = Omit<IconBaseProps, 'children'>;

const CloudUploadBold = memo(
  forwardRef<SVGSVGElement, CloudUploadBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cloud-upload-bold" {...props}>
      <path d="M12 4a7 7 0 0 1 6.33 4A6 6 0 0 1 18 20h-2a1 1 0 1 1 0-2h2a4 4 0 1 0-.27-7.99 1 1 0 0 1-1.01-.67A5 5 0 0 0 7 11v.1a1 1 0 0 1-1.25 1A3 3 0 1 0 5 18h3a1 1 0 1 1 0 2H5a5 5 0 0 1 0-10h.07A7 7 0 0 1 12 4" />
        <path d="M11.3 10.3a1 1 0 0 1 1.4 0l4 4a1 1 0 1 1-1.4 1.4L13 13.42V19a1 1 0 1 1-2 0v-5.59l-2.3 2.3a1 1 0 1 1-1.4-1.42z" />
    </IconBase>
  ))
);

CloudUploadBold.displayName = 'CloudUploadBold';

// Triple export pattern (lucide-react style)
export { CloudUploadBold, CloudUploadBold as CloudUploadBoldIcon, CloudUploadBold as SiCloudUploadBold };
export default CloudUploadBold;
export type { CloudUploadBoldProps };

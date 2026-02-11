import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CloudUploadRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudUploadRegularDuotone = memo(
  forwardRef<SVGSVGElement, CloudUploadRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cloud-upload-duotone" {...props}>
      <path d="M12 4.25a6.8 6.8 0 0 1 6.16 4 5.75 5.75 0 0 1-.16 11.5h-2a.75.75 0 0 1 0-1.5h2a4.25 4.25 0 1 0-.29-8.49.75.75 0 0 1-.76-.5A5.25 5.25 0 0 0 6.75 11v.11a.75.75 0 0 1-.93.74A3.26 3.26 0 0 0 1.75 15c0 1.8 1.46 3.25 3.25 3.25h3a.75.75 0 0 1 0 1.5H5a4.75 4.75 0 1 1 .3-9.5c.36-3.37 3.22-6 6.7-6" opacity={.4} />
        <path d="M11.47 10.47c.3-.3.77-.3 1.06 0l4 4a.75.75 0 1 1-1.06 1.06l-2.72-2.72V19a.75.75 0 0 1-1.5 0v-6.19l-2.72 2.72a.75.75 0 0 1-1.06-1.06z" />
    </IconBase>
  ))
);

CloudUploadRegularDuotone.displayName = 'CloudUploadRegularDuotone';

// Triple export pattern (lucide-react style)
export { CloudUploadRegularDuotone, CloudUploadRegularDuotone as CloudUploadRegularDuotoneIcon, CloudUploadRegularDuotone as SiCloudUploadRegularDuotone };
export default CloudUploadRegularDuotone;
export type { CloudUploadRegularDuotoneProps };

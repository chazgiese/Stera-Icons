import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CloudUploadFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudUploadFillDuotone = memo(
  forwardRef<SVGSVGElement, CloudUploadFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cloud-upload-fill-duotone" {...props}>
      <path fill="currentColor" d="M11.3 10.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L13 13.42V20h-2v-6.59l-2.3 2.3a1 1 0 0 1-1.4-1.42z" />
        <path fill="currentColor" d="M12 4a7 7 0 0 1 6.33 4A6 6 0 0 1 18 20h-5v-6.59l2.3 2.3a1 1 0 1 0 1.4-1.42l-4-4a1 1 0 0 0-1.4 0l-4 4a1 1 0 1 0 1.4 1.42l2.3-2.3V20H5a5 5 0 0 1 0-10h.07A7 7 0 0 1 12 4" opacity={.4} />
    </IconBase>
  ))
);

CloudUploadFillDuotone.displayName = 'CloudUploadFillDuotone';

// Triple export pattern (lucide-react style)
export { CloudUploadFillDuotone, CloudUploadFillDuotone as CloudUploadFillDuotoneIcon, CloudUploadFillDuotone as SiCloudUploadFillDuotone };
export default CloudUploadFillDuotone;
export type { CloudUploadFillDuotoneProps };

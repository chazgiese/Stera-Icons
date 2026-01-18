import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CloudUploadFillProps = Omit<IconBaseProps, 'children'>;

const CloudUploadFill = memo(
  forwardRef<SVGSVGElement, CloudUploadFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 4a7 7 0 0 1 6.33 4A6 6 0 0 1 18 20h-5v-6.59l2.3 2.3a1 1 0 1 0 1.4-1.42l-4-4a1 1 0 0 0-1.4 0l-4 4a1 1 0 1 0 1.4 1.42l2.3-2.3V20H5a5 5 0 0 1 0-10h.07A7 7 0 0 1 12 4" />
    </IconBase>
  ))
);

CloudUploadFill.displayName = 'CloudUploadFill';

export { CloudUploadFill };
export type { CloudUploadFillProps };

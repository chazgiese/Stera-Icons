import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CloudUploadBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudUploadBoldDuotone = memo(
  forwardRef<SVGSVGElement, CloudUploadBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 4a7 7 0 0 1 6.33 4A6 6 0 0 1 18 20h-2a1 1 0 1 1 0-2h2a4 4 0 1 0-.27-7.99 1 1 0 0 1-1.01-.67A5 5 0 0 0 7 11v.1a1 1 0 0 1-1.25 1A3 3 0 1 0 5 18h3a1 1 0 1 1 0 2H5a5 5 0 0 1 0-10h.07A7 7 0 0 1 12 4" opacity={.4} />
        <path fill="currentColor" d="M11.3 10.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L13 13.42V19a1 1 0 0 1-2 0v-5.59l-2.3 2.3a1 1 0 0 1-1.4-1.42z" />
    </IconBase>
  ))
);

CloudUploadBoldDuotone.displayName = 'CloudUploadBoldDuotone';

export { CloudUploadBoldDuotone };
export type { CloudUploadBoldDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ImagePileFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ImagePileFillDuotone = memo(
  forwardRef<SVGSVGElement, ImagePileFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6.19 4.78a4 4 0 0 1 4.46-3.49l8.6 1.06.2.03a4 4 0 0 1 3.28 4.43l-1.05 8.6a4 4 0 0 1-2.94 3.37q.23-.75.13-1.58L17.8 8.6a4 4 0 0 0-4.25-3.5l-.2.01-7.32.9z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M13.95 5.08a4 4 0 0 1 3.86 3.51l1.06 8.6a4 4 0 0 1-1.65 3.75 4 4 0 0 1-1.83.71l-8.6 1.06a4 4 0 0 1-3.03-.87 4 4 0 0 1-1.4-2.41l-.03-.2-1.06-8.6a4 4 0 0 1 3.48-4.46l8.6-1.06.2-.02zm-5.23 9.38c-.98-.76-2.39-.59-3.15.39L4.04 16.8l.27 2.18.04.2a2 2 0 0 0 2.19 1.55l8.6-1.06.2-.04zm3.2-4.86a1.83 1.83 0 1 0 .45 3.64 1.83 1.83 0 0 0-.45-3.64" clipRule="evenodd" />
    </IconBase>
  ))
);

ImagePileFillDuotone.displayName = 'ImagePileFillDuotone';

export { ImagePileFillDuotone };
export type { ImagePileFillDuotoneProps };

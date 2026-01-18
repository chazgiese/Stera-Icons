import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CloudXBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CloudXBoldDuotone = memo(
  forwardRef<SVGSVGElement, CloudXBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4a7 7 0 0 1 6.33 4A6 6 0 0 1 18 20H5a5 5 0 0 1 0-10h.07A7 7 0 0 1 12 4m0 2a5 5 0 0 0-5 5v.1a1 1 0 0 1-1.25 1A3 3 0 1 0 5 18h13a4 4 0 1 0-.27-7.99 1 1 0 0 1-1.01-.67A5 5 0 0 0 12 6" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13.3 10.3a1 1 0 1 1 1.4 1.4L13.42 13l1.3 1.3a1 1 0 0 1-1.42 1.4L12 14.42l-1.3 1.3a1 1 0 0 1-1.4-1.42L10.58 13l-1.3-1.3a1 1 0 1 1 1.42-1.4L12 11.58z" />
    </IconBase>
  ))
);

CloudXBoldDuotone.displayName = 'CloudXBoldDuotone';

export { CloudXBoldDuotone };
export type { CloudXBoldDuotoneProps };

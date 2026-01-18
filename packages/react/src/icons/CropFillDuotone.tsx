import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CropFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CropFillDuotone = memo(
  forwardRef<SVGSVGElement, CropFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 7.5v7.3c0 .58 0 .93.02 1.2.02.23.05.26.03.23q.08.15.22.22c-.03-.02 0 0 .24.03.26.02.6.02 1.19.02h7.3v3H9.2q-.81 0-1.44-.03c-.42-.04-.89-.12-1.35-.35a3.5 3.5 0 0 1-1.53-1.53 4 4 0 0 1-.35-1.35q-.04-.62-.03-1.44V7.5zM22 16.5a1.5 1.5 0 0 1 0 3h-2.5v-3zM6 .5c.83 0 1.5.67 1.5 1.5v2.5h-3V2c0-.83.67-1.5 1.5-1.5" />
        <path fill="currentColor" d="M14.8 4.5q.81 0 1.44.03c.42.04.89.12 1.35.35.66.34 1.2.87 1.53 1.53.23.46.31.93.35 1.35q.04.62.03 1.44V22a1.5 1.5 0 0 1-3 0V9.2c0-.58 0-.93-.02-1.2-.02-.23-.05-.26-.03-.23a.5.5 0 0 0-.22-.22c.03.02 0 0-.24-.03-.26-.02-.6-.02-1.19-.02H2a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

CropFillDuotone.displayName = 'CropFillDuotone';

export { CropFillDuotone };
export type { CropFillDuotoneProps };

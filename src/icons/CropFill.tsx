import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CropFillProps = Omit<IconBaseProps, 'children'>;

const CropFill = memo(
  forwardRef<SVGSVGElement, CropFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="crop-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6 .5c.83 0 1.5.67 1.5 1.5v2.5h7.3q.81 0 1.44.03c.42.04.89.12 1.35.35.66.34 1.2.87 1.53 1.53.23.46.31.93.35 1.35q.04.62.03 1.44v7.3H22a1.5 1.5 0 0 1 0 3h-2.5V22a1.5 1.5 0 0 1-3 0v-2.5H9.2q-.81 0-1.44-.03c-.42-.04-.89-.12-1.35-.35a3.5 3.5 0 0 1-1.53-1.53 4 4 0 0 1-.35-1.35q-.04-.62-.03-1.44V7.5H2a1.5 1.5 0 1 1 0-3h2.5V2c0-.83.67-1.5 1.5-1.5m1.5 14.3c0 .58 0 .93.02 1.2.02.23.05.26.03.23q.08.15.22.22c-.03-.02 0 0 .24.03.26.02.6.02 1.19.02h7.3V9.2c0-.58 0-.93-.02-1.2-.02-.23-.05-.26-.03-.23a.5.5 0 0 0-.22-.22c.03.02 0 0-.24-.03-.26-.02-.6-.02-1.19-.02H7.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CropFill.displayName = 'CropFill';

// Triple export pattern (lucide-react style)
export { CropFill, CropFill as CropFillIcon, CropFill as SiCropFill };
export default CropFill;
export type { CropFillProps };

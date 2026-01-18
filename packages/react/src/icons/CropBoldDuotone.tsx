import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CropBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CropBoldDuotone = memo(
  forwardRef<SVGSVGElement, CropBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7 7v7.8c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02H17v2H9.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V7zM22 17a1 1 0 1 1 0 2h-3v-2zM6 1a1 1 0 0 1 1 1v3H5V2a1 1 0 0 1 1-1" />
        <path fill="currentColor" d="M14.8 5q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4V22a1 1 0 1 1-2 0V9.2c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09C15.75 7 15.38 7 14.8 7H2a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

CropBoldDuotone.displayName = 'CropBoldDuotone';

export { CropBoldDuotone };
export type { CropBoldDuotoneProps };

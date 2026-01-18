import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CropBoldProps = Omit<IconBaseProps, 'children'>;

const CropBold = memo(
  forwardRef<SVGSVGElement, CropBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M6 1a1 1 0 0 1 1 1v3h7.8q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4V17h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H9.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V7H2a1 1 0 0 1 0-2h3V2a1 1 0 0 1 1-1m1 13.8c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02H17V9.2c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09C15.75 7 15.38 7 14.8 7H7z" clipRule="evenodd" />
    </IconBase>
  ))
);

CropBold.displayName = 'CropBold';

// Triple export pattern (lucide-react style)
export { CropBold, CropBold as CropBoldIcon, CropBold as SiCropBold };
export type { CropBoldProps };

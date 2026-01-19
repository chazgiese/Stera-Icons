import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MedicalCrossFillProps = Omit<IconBaseProps, 'children'>;

const MedicalCrossFill = memo(
  forwardRef<SVGSVGElement, MedicalCrossFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="medical-cross-fill" {...props}>
      <path fill="currentColor" d="M13.75 2C14.99 2 16 3 16 4.25V8h3.75C20.99 8 22 9 22 10.25v3.5c0 1.24-1 2.25-2.25 2.25H16v3.75c0 1.24-1 2.25-2.25 2.25h-3.5C9.01 22 8 21 8 19.75V16H4.25C3.01 16 2 15 2 13.75v-3.5C2 9.01 3 8 4.25 8H8V4.25C8 3.01 9 2 10.25 2z" />
    </IconBase>
  ))
);

MedicalCrossFill.displayName = 'MedicalCrossFill';

// Triple export pattern (lucide-react style)
export { MedicalCrossFill, MedicalCrossFill as MedicalCrossFillIcon, MedicalCrossFill as SiMedicalCrossFill };
export type { MedicalCrossFillProps };

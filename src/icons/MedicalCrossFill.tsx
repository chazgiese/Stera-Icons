import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MedicalCrossFillProps = Omit<IconBaseProps, 'children'>;

const MedicalCrossFill = memo(
  forwardRef<SVGSVGElement, MedicalCrossFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="medical-cross-fill" {...props}>
      <path d="M13.75 3c.97 0 1.75.78 1.75 1.75V8.5h3.75c.97 0 1.75.78 1.75 1.75v3.5c0 .97-.78 1.75-1.75 1.75H15.5v3.75c0 .97-.78 1.75-1.75 1.75h-3.5c-.97 0-1.75-.78-1.75-1.75V15.5H4.75c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.97.78-1.75 1.75-1.75H8.5V4.75c0-.97.78-1.75 1.75-1.75z" />
    </IconBase>
  ))
);

MedicalCrossFill.displayName = 'MedicalCrossFill';

// Triple export pattern (lucide-react style)
export { MedicalCrossFill, MedicalCrossFill as MedicalCrossFillIcon, MedicalCrossFill as SiMedicalCrossFill };
export default MedicalCrossFill;
export type { MedicalCrossFillProps };

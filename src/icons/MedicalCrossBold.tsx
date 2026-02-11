import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MedicalCrossBoldProps = Omit<IconBaseProps, 'children'>;

const MedicalCrossBold = memo(
  forwardRef<SVGSVGElement, MedicalCrossBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="medical-cross-bold" {...props}>
      <path fillRule="evenodd" d="M13.75 2.5c1.24 0 2.25 1 2.25 2.25V8h3.25c1.24 0 2.25 1 2.25 2.25v3.5c0 1.24-1 2.25-2.25 2.25H16v3.25c0 1.24-1 2.25-2.25 2.25h-3.5c-1.24 0-2.25-1-2.25-2.25V16H4.75c-1.24 0-2.25-1-2.25-2.25v-3.5C2.5 9.01 3.5 8 4.75 8H8V4.75C8 3.51 9 2.5 10.25 2.5zm-3.5 2a.25.25 0 0 0-.25.25V9a1 1 0 0 1-1 1H4.75a.25.25 0 0 0-.25.25v3.5c0 .14.11.25.25.25H9a1 1 0 0 1 1 1v4.25q.02.23.25.25h3.5q.23-.02.25-.25V15a1 1 0 0 1 1-1h4.25q.23-.02.25-.25v-3.5a.25.25 0 0 0-.25-.25H15a1 1 0 0 1-1-1V4.75a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

MedicalCrossBold.displayName = 'MedicalCrossBold';

// Triple export pattern (lucide-react style)
export { MedicalCrossBold, MedicalCrossBold as MedicalCrossBoldIcon, MedicalCrossBold as SiMedicalCrossBold };
export default MedicalCrossBold;
export type { MedicalCrossBoldProps };

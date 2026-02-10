import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MedicalCrossRegularProps = Omit<IconBaseProps, 'children'>;

const MedicalCrossRegular = memo(
  forwardRef<SVGSVGElement, MedicalCrossRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="medical-cross" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.75 2.75a2 2 0 0 1 2 2v3.5h3.5a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-3.5v3.5a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-3.5h-3.5a2 2 0 0 1-2-2v-3.5c0-1.1.9-2 2-2h3.5v-3.5c0-1.1.9-2 2-2zm-3.5 1.5a.5.5 0 0 0-.5.5V9c0 .41-.34.75-.75.75H4.75a.5.5 0 0 0-.5.5v3.5c0 .28.22.5.5.5H9c.41 0 .75.34.75.75v4.25c0 .28.22.5.5.5h3.5a.5.5 0 0 0 .5-.5V15c0-.41.34-.75.75-.75h4.25a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5H15a.75.75 0 0 1-.75-.75V4.75a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

MedicalCrossRegular.displayName = 'MedicalCrossRegular';

// Triple export pattern (lucide-react style)
export { MedicalCrossRegular, MedicalCrossRegular as MedicalCrossRegularIcon, MedicalCrossRegular as SiMedicalCrossRegular };
export default MedicalCrossRegular;
export type { MedicalCrossRegularProps };

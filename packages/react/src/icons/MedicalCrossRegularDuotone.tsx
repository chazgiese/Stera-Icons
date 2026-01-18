import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MedicalCrossRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MedicalCrossRegularDuotone = memo(
  forwardRef<SVGSVGElement, MedicalCrossRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M3.75 13.75c0 .28.22.5.5.5H9c.41 0 .75.34.75.75v4.75c0 .28.22.5.5.5h3.5a.5.5 0 0 0 .5-.5V15c0-.41.34-.75.75-.75h4.75a.5.5 0 0 0 .5-.5V12h1.5v1.75a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-4h-4a2 2 0 0 1-2-2V12h1.5z" opacity={.4} />
        <path fill="currentColor" d="M13.75 2.25a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2V12h-1.5v-1.75a.5.5 0 0 0-.5-.5H15a.75.75 0 0 1-.75-.75V4.25a.5.5 0 0 0-.5-.5h-3.5a.5.5 0 0 0-.5.5V9c0 .41-.34.75-.75.75H4.25a.5.5 0 0 0-.5.5V12h-1.5v-1.75c0-1.1.9-2 2-2h4v-4c0-1.1.9-2 2-2z" />
    </IconBase>
  ))
);

MedicalCrossRegularDuotone.displayName = 'MedicalCrossRegularDuotone';

export { MedicalCrossRegularDuotone };
export type { MedicalCrossRegularDuotoneProps };

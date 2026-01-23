import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FileCabinetFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FileCabinetFillDuotone = memo(
  forwardRef<SVGSVGElement, FileCabinetFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="file-cabinet-fill-duotone" {...props}>
      <path d="M21 17.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2V13h18zm-11-1.7a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM15.2 1q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05V11H3V6.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1zM10 5a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M14 15.5a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zM21 13H3v-2h18zM14 5a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

FileCabinetFillDuotone.displayName = 'FileCabinetFillDuotone';

// Triple export pattern (lucide-react style)
export { FileCabinetFillDuotone, FileCabinetFillDuotone as FileCabinetFillDuotoneIcon, FileCabinetFillDuotone as SiFileCabinetFillDuotone };
export default FileCabinetFillDuotone;
export type { FileCabinetFillDuotoneProps };

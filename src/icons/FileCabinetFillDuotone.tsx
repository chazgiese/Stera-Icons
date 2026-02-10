import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FileCabinetFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FileCabinetFillDuotone = memo(
  forwardRef<SVGSVGElement, FileCabinetFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="file-cabinet-fill-duotone" {...props}>
      <path d="M20 16.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 17.43 4 16.2V13h16zm-9.5-.7a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM14.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05V11H4V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 2 9.8 2zm-3.7 2.5a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M13.5 15.5a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM20 13H4v-2h16zM13.5 4.5a1 1 0 1 1 0 2h-3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

FileCabinetFillDuotone.displayName = 'FileCabinetFillDuotone';

// Triple export pattern (lucide-react style)
export { FileCabinetFillDuotone, FileCabinetFillDuotone as FileCabinetFillDuotoneIcon, FileCabinetFillDuotone as SiFileCabinetFillDuotone };
export default FileCabinetFillDuotone;
export type { FileCabinetFillDuotoneProps };

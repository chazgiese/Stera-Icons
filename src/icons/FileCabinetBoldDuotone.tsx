import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FileCabinetBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FileCabinetBoldDuotone = memo(
  forwardRef<SVGSVGElement, FileCabinetBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="file-cabinet-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M14.2 2q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v8.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q4 17.43 4 16.2V7.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q8.57 2 9.8 2zM6 13v3.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V13zm3.8-9c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 6 7.8V11h12V7.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C15.64 4 15.06 4 14.2 4z" clipRule="evenodd" opacity={.4} />
        <path d="M13.5 14.5a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM13.5 5.5a1 1 0 1 1 0 2h-3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

FileCabinetBoldDuotone.displayName = 'FileCabinetBoldDuotone';

// Triple export pattern (lucide-react style)
export { FileCabinetBoldDuotone, FileCabinetBoldDuotone as FileCabinetBoldDuotoneIcon, FileCabinetBoldDuotone as SiFileCabinetBoldDuotone };
export default FileCabinetBoldDuotone;
export type { FileCabinetBoldDuotoneProps };

import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FileCabinetBoldProps = Omit<IconBaseProps, 'children'>;

const FileCabinetBold = memo(
  forwardRef<SVGSVGElement, FileCabinetBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="file-cabinet-bold" {...props}>
      <path fill="currentColor" d="M14 15a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2zM14 5a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M15.2 1q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v10.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2V6.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1zM5 17.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V13H5zM8.8 3c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 5 6.8V11h14V6.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C16.64 3 16.06 3 15.2 3z" clipRule="evenodd" />
    </IconBase>
  ))
);

FileCabinetBold.displayName = 'FileCabinetBold';

// Triple export pattern (lucide-react style)
export { FileCabinetBold, FileCabinetBold as FileCabinetBoldIcon, FileCabinetBold as SiFileCabinetBold };
export default FileCabinetBold;
export type { FileCabinetBoldProps };

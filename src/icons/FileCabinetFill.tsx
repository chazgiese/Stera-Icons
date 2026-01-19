import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FileCabinetFillProps = Omit<IconBaseProps, 'children'>;

const FileCabinetFill = memo(
  forwardRef<SVGSVGElement, FileCabinetFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="file-cabinet-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21 17.2q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 18.43 3 17.2V13h18zM10 16a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM15.2 1q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05V11H3V6.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1zM10 4a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

FileCabinetFill.displayName = 'FileCabinetFill';

// Triple export pattern (lucide-react style)
export { FileCabinetFill, FileCabinetFill as FileCabinetFillIcon, FileCabinetFill as SiFileCabinetFill };
export default FileCabinetFill;
export type { FileCabinetFillProps };

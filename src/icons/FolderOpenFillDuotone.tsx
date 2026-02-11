import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderOpenFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderOpenFillDuotone = memo(
  forwardRef<SVGSVGElement, FolderOpenFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-open-fill-duotone" {...props}>
      <path d="M7.67 3.63c.45 0 .82-.01 1.17.07q.45.11.83.35c.31.19.57.45.89.77l.12.12c.38.38.47.46.56.52q.15.09.33.13c.1.03.23.04.76.04h3.82q.73 0 1.25.02.54.03 1.03.24.78.37 1.24 1.1.27.48.36 1t.17 1.24l.04.4H6.7l-.77.01q-.35.02-.73.17-.56.26-.9.76-.21.35-.29.7-.08.32-.14.76l-.6 3.6q-.17.94-.23 1.58c-.03.44-.02.87.14 1.3q.24.64.76 1.11-.63-.46-1.04-1.12a4 4 0 0 1-.47-1.38q-.12-.73-.22-1.86l-.72-7.15q-.1-.9-.11-1.5c-.01-.43.03-.84.2-1.23.25-.6.7-1.1 1.26-1.4q.57-.29 1.2-.32.6-.04 1.5-.03z" opacity={.4} />
        <path d="M19.64 9.63q.6 0 1.02.02c.3.02.62.08.92.26q.66.38.94 1.1c.12.33.12.65.1.95q-.04.43-.15 1.01l-.44 2.66q-.17 1.04-.32 1.74-.16.7-.52 1.28-.63.92-1.65 1.39-.63.25-1.34.3t-1.77.04H7.28q-.96.01-1.6-.04a3 3 0 0 1-1.25-.35 3 3 0 0 1-1.26-1.49 3 3 0 0 1-.14-1.29q.06-.64.23-1.58l.6-3.6q.07-.44.14-.76.08-.35.29-.7.34-.5.9-.76.38-.15.73-.17t.77-.02z" />
    </IconBase>
  ))
);

FolderOpenFillDuotone.displayName = 'FolderOpenFillDuotone';

// Triple export pattern (lucide-react style)
export { FolderOpenFillDuotone, FolderOpenFillDuotone as FolderOpenFillDuotoneIcon, FolderOpenFillDuotone as SiFolderOpenFillDuotone };
export default FolderOpenFillDuotone;
export type { FolderOpenFillDuotoneProps };

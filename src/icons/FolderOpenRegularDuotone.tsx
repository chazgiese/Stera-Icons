import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FolderOpenRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderOpenRegularDuotone = memo(
  forwardRef<SVGSVGElement, FolderOpenRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-open-duotone" {...props}>
      <path fill="currentColor" d="M7.93 3.25c.92 0 1.78.46 2.29 1.22l.81 1.22c.23.35.62.56 1.04.56h7.08c1.43 0 2.63 1.1 2.74 2.54l.12 1.6a2 2 0 0 0-.74-.14h-.77l-.1-1.35a1.25 1.25 0 0 0-1.25-1.15h-7.08c-.92 0-1.78-.46-2.29-1.22L8.97 5.3a1.3 1.3 0 0 0-1.04-.56h-4.8c-.72 0-1.3.6-1.25 1.33l.63 10.03-.34 1.02a2.75 2.75 0 0 0 2.34 3.6 3.75 3.75 0 0 1-3.43-3.5L.38 6.17a2.75 2.75 0 0 1 2.75-2.92z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M21.27 10.25a2 2 0 0 1 1.9 2.63l-1.77 5.3a3.75 3.75 0 0 1-3.56 2.57H4.77a2.75 2.75 0 0 1-2.6-3.62L4 11.62a2 2 0 0 1 1.9-1.37zM5.9 11.75a.5.5 0 0 0-.47.34L3.59 17.6c-.27.81.33 1.65 1.18 1.65h13.07c.97 0 1.83-.62 2.13-1.54l1.77-5.3a.5.5 0 0 0-.47-.66z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderOpenRegularDuotone.displayName = 'FolderOpenRegularDuotone';

// Triple export pattern (lucide-react style)
export { FolderOpenRegularDuotone, FolderOpenRegularDuotone as FolderOpenRegularDuotoneIcon, FolderOpenRegularDuotone as SiFolderOpenRegularDuotone };
export default FolderOpenRegularDuotone;
export type { FolderOpenRegularDuotoneProps };

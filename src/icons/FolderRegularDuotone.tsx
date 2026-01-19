import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FolderRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FolderRegularDuotone = memo(
  forwardRef<SVGSVGElement, FolderRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-duotone" {...props}>
      <path fill="currentColor" d="M4 4.75c-.69 0-1.25.56-1.25 1.25v4.25H2a.75.75 0 0 0-.75.75V6A2.75 2.75 0 0 1 4 3.25h4.93c.92 0 1.78.46 2.29 1.22l.81 1.22c.23.35.62.56 1.04.56H20A2.75 2.75 0 0 1 22.75 9v2a.75.75 0 0 0-.75-.75h-.75V9c0-.69-.56-1.25-1.25-1.25h-6.93c-.92 0-1.78-.46-2.29-1.22L9.97 5.3a1.3 1.3 0 0 0-1.04-.56z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M22 10.25c.41 0 .75.34.75.75v6A3.75 3.75 0 0 1 19 20.75H5A3.75 3.75 0 0 1 1.25 17v-6c0-.41.34-.75.75-.75zM2.75 17c0 1.24 1 2.25 2.25 2.25h14c1.24 0 2.25-1 2.25-2.25v-5.25H2.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderRegularDuotone.displayName = 'FolderRegularDuotone';

// Triple export pattern (lucide-react style)
export { FolderRegularDuotone, FolderRegularDuotone as FolderRegularDuotoneIcon, FolderRegularDuotone as SiFolderRegularDuotone };
export default FolderRegularDuotone;
export type { FolderRegularDuotoneProps };

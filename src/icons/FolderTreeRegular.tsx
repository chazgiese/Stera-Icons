import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FolderTreeRegularProps = Omit<IconBaseProps, 'children'>;

const FolderTreeRegular = memo(
  forwardRef<SVGSVGElement, FolderTreeRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="folder-tree" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.83 13.25a2 2 0 0 1 1.67.9l.4.6h2.85a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2v-4.5c0-1.1.9-2 2-2zm-.58 1.5a.5.5 0 0 0-.5.5v4.5c0 .28.22.5.5.5h5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H16.5a.8.8 0 0 1-.62-.33l-.63-.95a.5.5 0 0 0-.42-.22z" clipRule="evenodd" />
        <path fill="currentColor" d="M3 2.25c.41 0 .75.34.75.75v1.5c0 .97.78 1.75 1.75 1.75H9a.75.75 0 0 1 0 1.5H5.5q-.97-.02-1.75-.51v8.26c0 .97.78 1.75 1.75 1.75H9a.75.75 0 0 1 0 1.5H5.5a3.25 3.25 0 0 1-3.25-3.25V5q0-.07.02-.16l-.02-.34V3c0-.41.34-.75.75-.75" />
        <path fill="currentColor" fillRule="evenodd" d="M14.83 2.25a2 2 0 0 1 1.67.9l.4.6h2.85a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2v-4.5c0-1.1.9-2 2-2zm-.58 1.5a.5.5 0 0 0-.5.5v4.5c0 .28.22.5.5.5h5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H16.5a.8.8 0 0 1-.62-.33l-.63-.95a.5.5 0 0 0-.42-.22z" clipRule="evenodd" />
    </IconBase>
  ))
);

FolderTreeRegular.displayName = 'FolderTreeRegular';

// Triple export pattern (lucide-react style)
export { FolderTreeRegular, FolderTreeRegular as FolderTreeRegularIcon, FolderTreeRegular as SiFolderTreeRegular };
export type { FolderTreeRegularProps };
